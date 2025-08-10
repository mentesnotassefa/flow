import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';

// Load environment variables from .env file
dotenv.config();

// Initialize Firebase Admin SDK
// You need to replace this with your service account key.
// Go to Firebase Project Settings > Service accounts > Generate new private key
// and save the JSON file. You can then use it here.
import serviceAccount from "./your-service-account-file.json"; // Placeholder
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// MongoDB User Schema
const userSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Middleware to verify Firebase ID token
const verifyIdToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (!idToken) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    res.status(401).send('Unauthorized');
  }
};

// API Routes
app.post('/api/signup', verifyIdToken, async (req, res) => {
  const { email } = req.body;
  const firebaseUid = req.user.uid;

  try {
    const existingUser = await User.findOne({ firebaseUid });
    if (existingUser) {
      return res.status(409).send('User already exists');
    }

    const newUser = new User({ firebaseUid, email });
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error creating user in database:', error);
    res.status(500).send('Internal server error');
  }
});

app.get('/api/user/:uid', verifyIdToken, async (req, res) => {
  const { uid } = req.params;
  // Ensure the requested UID matches the authenticated user's UID
  if (req.user.uid !== uid) {
    return res.status(403).send('Forbidden');
  }

  try {
    const user = await User.findOne({ firebaseUid: uid });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
