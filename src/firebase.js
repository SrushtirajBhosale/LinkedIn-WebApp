import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB7vWVWehcvsWZOuoIDrig-BXz5mFJtLGY",
  authDomain: "linkedin-2d891.firebaseapp.com",
  projectId: "linkedin-2d891",
  storageBucket: "linkedin-2d891.appspot.com",
  messagingSenderId: "942820387286",
  appId: "1:942820387286:web:9fa24964d93f5731641c77",
  measurementId: "G-QEK672YD0P"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, googleProvider, storage };
