// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //import.meta.env.VITE_FIREBASE_API_KEY
  apiKey: "AIzaSyDPCNEOHXsKBxOyfdFaR0ft7rZarG6bPdI",
  authDomain: "rentify-245b2.firebaseapp.com",
  projectId: "rentify-245b2",
  storageBucket: "rentify-245b2.appspot.com",
  messagingSenderId: "303455801311",
  appId: "1:303455801311:web:ff31545ad4c9ee26437e6a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
