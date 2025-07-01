/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCR9ZNNAUsF9xO2JULSVOPr8xKgqfDJJ-A",
  authDomain: "shub-98c02.firebaseapp.com",
  projectId: "shub-98c02",
  storageBucket: "shub-98c02.appspot.com",
  messagingSenderId: "978431886627",
  appId: "1:978431886627:web:b5e23458a7730dcc1cf896"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
