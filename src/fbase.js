// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAnRu1IN7x0CHkKdYNuK4Qv7h6sx2gAMU",
  authDomain: "nwitter-82cba.firebaseapp.com",
  projectId: "nwitter-82cba",
  storageBucket: "nwitter-82cba.appspot.com",
  messagingSenderId: "1074647379509",
  appId: "1:1074647379509:web:fedb16dad0837a8e294b7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreService = getFirestore();
