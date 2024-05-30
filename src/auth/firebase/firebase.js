// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMMM0i8kd00O4mMAGcH9e7ArHWiB1uXEs",
  authDomain: "the-people-ecf95.firebaseapp.com",
  projectId: "the-people-ecf95",
  storageBucket: "the-people-ecf95.appspot.com",
  messagingSenderId: "325550248326",
  appId: "1:325550248326:web:f66ebd3b783d9a62031c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}