// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseAppConfig = {
  apiKey: "AIzaSyDTn3gopPqu_uLlYq2DW3-HM9QAFTwtzuA",
  authDomain: "strp-rabbit-hole.firebaseapp.com",
  databaseURL: "https://strp-rabbit-hole-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "strp-rabbit-hole",
  storageBucket: "strp-rabbit-hole.appspot.com",
  messagingSenderId: "77346985366",
  appId: "1:77346985366:web:bfceb8e0d2bd5fdcd839b7",
  measurementId: "G-FNBEBLC9YV"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseAppConfig);
export const database = getFirestore(firebaseApp);