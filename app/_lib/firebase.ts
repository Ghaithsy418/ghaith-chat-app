import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ghaith-chat-app.firebaseapp.com",
  projectId: "ghaith-chat-app",
  storageBucket: "ghaith-chat-app.firebasestorage.app",
  messagingSenderId: "145786145170",
  appId: "1:145786145170:web:709b034a9318aefb32994b",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore();