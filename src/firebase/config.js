import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXP4rwgPJ61w_Z6DhJ1uX3ZVMpXEr4CAc",
  authDomain: "coderhouse-60030-69bd5.firebaseapp.com",
  projectId: "coderhouse-60030-69bd5",
  storageBucket: "coderhouse-60030-69bd5.appspot.com",
  messagingSenderId: "111178947185",
  appId: "1:111178947185:web:9d56f70a4cc4efa119d9d0",
  measurementId: "G-BZL1ZRPTDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// inicializamos la base de datos

export const db= getFirestore(app,analytics);
