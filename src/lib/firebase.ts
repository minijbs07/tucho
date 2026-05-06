import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx6bwLc0Vp6ZcYWuSwBDaa3ATf4r2tXcY",
  authDomain: "tuchoapp-eaf89.firebaseapp.com",
  projectId: "tuchoapp-eaf89",
  storageBucket: "tuchoapp-eaf89.firebasestorage.app",
  messagingSenderId: "693258670535",
  appId: "1:693258670535:web:0313c7ce75a5ca47cb49e2",
  measurementId: "G-ZNP9NJ3EB8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
