import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcHR2OSLoRQMxiPjHMrC9nXYRTWH4qVa0",
  authDomain: "social-app-a08d6.firebaseapp.com",
  projectId: "social-app-a08d6",
  storageBucket: "social-app-a08d6.appspot.com",
  messagingSenderId: "319453364453",
  appId: "1:319453364453:web:5c548f3d2e996dceef540c",
  measurementId: "G-JT26PR00FS"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, googleProvider, storage };
