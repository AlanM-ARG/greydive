// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKP2hk12beDuvRw_f7ZSdQCAehu78S67E",
  authDomain: "greydive-f9484.firebaseapp.com",
  projectId: "greydive-f9484",
  storageBucket: "greydive-f9484.appspot.com",
  messagingSenderId: "94387350538",
  appId: "1:94387350538:web:4aeb935e491c4388ec03f3",
  measurementId: "G-E1FWYX09D7"
};

// Initialize Firebase
const greydive = initializeApp(firebaseConfig);

export default greydive