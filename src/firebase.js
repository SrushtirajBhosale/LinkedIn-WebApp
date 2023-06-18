import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA2WasmWmOCrLI0ZV4u4ENhfbyUeYZFYiY",
  authDomain: "linked-n-eae5a.firebaseapp.com",
  databaseURL: "https://linked-n-eae5a-default-rtdb.firebaseio.com",
  projectId: "linked-n-eae5a",
  storageBucket: "linked-n-eae5a.appspot.com",
  messagingSenderId: "1169066772",
  appId: "1:1169066772:web:27bed66a361ce069761001",
  measurementId: "G-9MT3RWV19X"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, googleProvider, storage };
