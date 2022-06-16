// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy3UcRpCu0m3hipWRp6e2ptS5JgHDub6I",
  authDomain: "linkedin-clone-e66f8.firebaseapp.com",
  projectId: "linkedin-clone-e66f8",
  storageBucket: "linkedin-clone-e66f8.appspot.com",
  messagingSenderId: "629175821931",
  appId: "1:629175821931:web:d38c5653cdf3babd4a332e",
  measurementId: "G-72WVR43SG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth();

export {db, auth};