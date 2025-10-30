// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAInxovRq3zsO_WQYuQe8nlkz8yu3tnirY",
  authDomain: "smart-farm-management-27094.firebaseapp.com",
  projectId: "smart-farm-management-27094",
  storageBucket: "smart-farm-management-27094.appspot.com",
  messagingSenderId: "230222025451",
  appId: "1:230222025451:web:49e6f53fd57284d45664ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
