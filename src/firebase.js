// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgcq6QbdRTqwo9roZWy5rDTXkWFyze8Ts",
  authDomain: "foodapp-5f221.firebaseapp.com",
  projectId: "foodapp-5f221",
  storageBucket: "foodapp-5f221.appspot.com",
  messagingSenderId: "921449123814",
  appId: "1:921449123814:web:9ef8e4d2feb365c2e75027",
  measurementId: "G-H1Y112VNJG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
