import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration using environment variables
const firebaseConfig = {
   apiKey: "AIzaSyCrKP2gYNDd3LEH6pOPvjwThOMtxcVNIuM",
    authDomain: "ceb-project-88d7e.firebaseapp.com",
    projectId: "ceb-project-88d7e",
    storageBucket: "ceb-project-88d7e.firebasestorage.app",
    messagingSenderId: "792089470244",
    appId: "1:792089470244:web:36a1bb2fb96fc6bc83bfb1",
    measurementId: "G-XEZ6MR4G1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
export default app;
