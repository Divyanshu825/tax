// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1xYcqRO7sJGEyyiT6pg1V6Y_-ZYenRzU",
  authDomain: "dreamsakar-75249.firebaseapp.com",
  projectId: "dreamsakar-75249",
  storageBucket: "dreamsakar-75249.appspot.com",
  messagingSenderId: "234481557074",
  appId: "1:234481557074:web:d0f5a18f7ed454be83898b",
  measurementId: "G-JNGJ7D7BM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);