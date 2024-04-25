// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-fc5d1.firebaseapp.com",
  projectId: "estate-fc5d1",
  storageBucket: "estate-fc5d1.appspot.com",
  messagingSenderId: "53133834363",
  appId: "1:53133834363:web:5387a208f32dba2890cade"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);