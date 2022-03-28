// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQb9-ZgkXj8t7ckAUv-ozc4qKbYThPivI",
  authDomain: "sparta-react-skill.firebaseapp.com",
  projectId: "sparta-react-skill",
  storageBucket: "sparta-react-skill.appspot.com",
  messagingSenderId: "651303264195",
  appId: "1:651303264195:web:5d15835910974143d3e776",
  measurementId: "G-HKQYPFP47K"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();