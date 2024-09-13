import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'; // Added Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqUhaVsDUvbl4CWeUGNiUIGX3mk4rx0LI",
  authDomain: "kem-soaw.firebaseapp.com",
  projectId: "kem-soaw",
  storageBucket: "kem-soaw.appspot.com",
  messagingSenderId: "816445607770",
  appId: "1:816445607770:web:1e5751b7d50d656ee86d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Firestore Database
const db = getFirestore(app);  // Added Firestore initialization

// Helper function to track authentication state
const monitorAuthState = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  });
};

export { auth, storage, db, monitorAuthState };  // Added `db` to the exports
