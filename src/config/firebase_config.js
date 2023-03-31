// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBZS-b992jDfhgoYj1Wmp0pyL80zpg96f8",
  authDomain: "otp-infinity-de50d.firebaseapp.com",
  projectId: "otp-infinity-de50d",
  storageBucket: "otp-infinity-de50d.appspot.com",
  messagingSenderId: "251270942679",
  appId: "1:251270942679:web:1a3463a3db4fff9b330592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)