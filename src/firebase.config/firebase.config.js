// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNt-2wSjwlF25OBwMa_LVRh8nM_h23MMA",
  authDomain: "simple-authentication-cef45.firebaseapp.com",
  projectId: "simple-authentication-cef45",
  storageBucket: "simple-authentication-cef45.appspot.com",
  messagingSenderId: "356953803190",
  appId: "1:356953803190:web:69c233ab251c5b08745917"
};

// Initialize Firebase
const APP = initializeApp(firebaseConfig);
const auth = getAuth(APP);
export default auth;