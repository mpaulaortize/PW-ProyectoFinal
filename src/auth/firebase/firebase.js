import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCMMM0i8kd00O4mMAGcH9e7ArHWiB1uXEs",
  authDomain: "the-people-ecf95.firebaseapp.com",
  projectId: "the-people-ecf95",
  storageBucket: "the-people-ecf95.appspot.com",
  messagingSenderId: "325550248326",
  appId: "1:325550248326:web:f66ebd3b783d9a62031c07"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

