// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
apiKey: "AIzaSyA1G059G9lhIIhdy8DpCggPy6h3yokysSE",
  authDomain: "khushiluvbeading.firebaseapp.com",
  projectId: "khushiluvbeading",
  storageBucket: "khushiluvbeading.firebasestorage.app",
  messagingSenderId: "1044126653884",
  appId: "1:1044126653884:web:0f534e4ffdc77b3966dfb9",
  measurementId: "G-F4W62Q7BX9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };