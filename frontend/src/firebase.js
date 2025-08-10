import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWvgVGEQ81zuRjnC2MJDBUQk7QIyySRds",
  authDomain: "tutor-5ac54.firebaseapp.com",
  projectId: "tutor-5ac54",
  storageBucket: "tutor-5ac54.firebasestorage.app",
  messagingSenderId: "243784697261",
  appId: "1:243784697261:web:5f225eccdbfc6929ab8d24",
  measurementId: "G-6MWE257TNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);