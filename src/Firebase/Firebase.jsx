// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxelrwe_6MDjN8KjzylUHdo-KH7phkqok",
  authDomain: "tourists-spot.firebaseapp.com",
  projectId: "tourists-spot",
  storageBucket: "tourists-spot.appspot.com",
  messagingSenderId: "77218511373",
  appId: "1:77218511373:web:1123e2d8396d5248a43344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth