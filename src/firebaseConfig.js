import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCD3213AWvhQLGWEsflsbLqVGM4cmZG-Vw",
  authDomain: "sheygram-lite-udemy.firebaseapp.com",
  projectId: "sheygram-lite-udemy",
  storageBucket: "sheygram-lite-udemy.appspot.com",
  messagingSenderId: "1988174220",
  appId: "1:1988174220:web:22e169f1cbf1b3e6f436a9",
  measurementId: "G-DCC36M4NMD"
};


const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app)

export {app , fireDb}