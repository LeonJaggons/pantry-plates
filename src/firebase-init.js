// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdWrd9WQCtZ5G2ZzzLUDevSwAXkuIPzpk",
  authDomain: "pantry-plates.firebaseapp.com",
  projectId: "pantry-plates",
  storageBucket: "pantry-plates.appspot.com",
  messagingSenderId: "832986837731",
  appId: "1:832986837731:web:40545adb10bd90148b8bd6",
  measurementId: "G-ZT52RYR518",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
