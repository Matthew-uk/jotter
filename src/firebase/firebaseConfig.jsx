import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTeUQvwB-EVBltTXE3ywHv0m2bt4zJ2FI",
  authDomain: "jotter-dae2b.firebaseapp.com",
  projectId: "jotter-dae2b",
  storageBucket: "jotter-dae2b.appspot.com",
  messagingSenderId: "945965854998",
  appId: "1:945965854998:web:870cda085019b3ceb3a037",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// FireStore Initialization
export const jotterStore = firebase.firestore();
// Firebase Auth
export const jotterAuth = firebase.auth();
//Timestamp
export const Timestamp = firebase.firestore.Timestamp;
