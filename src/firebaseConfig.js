import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
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

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { db, storage };
