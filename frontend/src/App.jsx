import React, { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { auth } from './firebase';

const API_BASE_URL = 'http://localhost:5000/api';

// Simple Components for pages
const HomePage = ({ onLogin, onSignup }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">Welcome to the Tutor Platform</h1>
      <p className="text-gray-600 text-center mb-6">Log in or sign up to get started!</p>
      <div className="flex flex-col space-y-4">
        <button
          onClick={onLogin}
          className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Log In
        </button>
        <button
          onClick={onSignup}
          className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
);

const UserDashboard = ({ user, onLogout }) => (
  <div className="min-h-screen bg-gray-100 p-8">
    <header className="bg-white rounded-lg shadow-lg p-6 mb-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Hello, {user.email}!</span>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </header>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Bookings</h2>
      <p className="text-gray-600">This is where your upcoming sessions would be displayed.</p>
    </div>
  </div>
);

const AuthForm = ({ isLogin, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // After successful signup, send the Firebase ID token to your backend
        const idToken = await userCredential.user.getIdToken();
        await fetch(`${API_BASE_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
          },
          body: JSON.stringify({ email: userCredential.user.email })
        });
      }
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
          {isLogin ? 'Log In' : 'Sign Up'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <button onClick={onBack} className="mt-4 text-sm text-indigo-600 hover:underline">
          Go back
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'login', 'signup', 'dashboard'

  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setCurrentPage('dashboard');
      } else {
        setUser(null);
        setCurrentPage('home');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onLogin={() => setCurrentPage('login')} onSignup={() => setCurrentPage('signup')} />;
      case 'login':
        return <AuthForm isLogin={true} onBack={() => setCurrentPage('home')} />;
      case 'signup':
        return <AuthForm isLogin={false} onBack={() => setCurrentPage('home')} />;
      case 'dashboard':
        return <UserDashboard user={user} onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  return <div className="font-sans">{renderContent()}</div>;
}