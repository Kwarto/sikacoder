/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARSj6dj8c3RTPl4jPjMiW9LDbZEP6sU5M",
  authDomain: "sikacoder.firebaseapp.com",
  projectId: "sikacoder",
  storageBucket: "sikacoder.firebasestorage.app",
  messagingSenderId: "266623423163",
  appId: "1:266623423163:web:52bfbbc9550826f3e8cf9e",
  measurementId: "G-3WNEBYFSPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
