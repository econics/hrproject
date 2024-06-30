// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxsjhXaaKDm9cno4RUayyqYFp1F5MPmgM",
  authDomain: "hrapp-42d23.firebaseapp.com",
  databaseURL: "https://hrapp-42d23-default-rtdb.firebaseio.com",
  projectId: "hrapp-42d23",
  storageBucket: "hrapp-42d23.appspot.com",
  messagingSenderId: "255566447893",
  appId: "1:255566447893:web:f75d3159f92dfbb014151c",
  measurementId: "G-NR96J6EX3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
