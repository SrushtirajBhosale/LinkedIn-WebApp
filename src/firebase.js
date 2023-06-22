import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC6tKH-wjeXoJs7JMRIt9EGXu3Gw3dY_sM",
  authDomain: "social-group-f2030.firebaseapp.com",
  databaseURL: "https://social-group-f2030-default-rtdb.firebaseio.com",
  projectId: "social-group-f2030",
  storageBucket: "social-group-f2030.appspot.com",
  messagingSenderId: "901630834637",
  appId: "1:901630834637:web:01194f484b42c06a9f7684",
  measurementId: "G-HZQ3F3JE4X"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, googleProvider, storage };
