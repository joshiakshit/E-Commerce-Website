// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXU6-RqbMa6w_DdieyscjrjmMFvb6MRCY",
  authDomain: "portfolio-e-commerce-web.firebaseapp.com",
  projectId: "portfolio-e-commerce-web",
  storageBucket: "portfolio-e-commerce-web.firebasestorage.app",
  messagingSenderId: "223927814021",
  appId: "1:223927814021:web:393960c66b83f230cfa6ec",
  measurementId: "G-KGG4V4Z39T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;