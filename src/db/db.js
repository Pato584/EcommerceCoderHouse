// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG3zXe3d8q1Qv6A-6pnRlr573sdgjcT5I",
  authDomain: "e-commerce-react-coder-9a787.firebaseapp.com",
  projectId: "e-commerce-react-coder-9a787",
  storageBucket: "e-commerce-react-coder-9a787.appspot.com",
  messagingSenderId: "716306744642",
  appId: "1:716306744642:web:9fd3bb336c6385a7ee74db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db;