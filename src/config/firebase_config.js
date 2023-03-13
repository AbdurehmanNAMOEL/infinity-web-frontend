// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxRBB7UaZk5oXbHEFWxzjwYbqfgDyNRe0",
  authDomain: "infinity-otp-abe28.firebaseapp.com",
  projectId: "infinity-otp-abe28",
  storageBucket: "infinity-otp-abe28.appspot.com",
  messagingSenderId: "980759565675",
  appId: "1:980759565675:web:81ec22be1e360ebc9a282e",
  measurementId: "G-30CHGX7PWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)