import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB4Y9npn6HUVdzGEhttXP_s-Inj6zauQg",
  authDomain: "projek-4-818d8.firebaseapp.com",
  projectId: "projek-4-818d8",
  storageBucket: "projek-4-818d8.firebasestorage.app",
  messagingSenderId: "509432232001",
  appId: "1:509432232001:web:7ad9161a1ff0f2abadeec0",
  measurementId: "G-CY71GZLX7R",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
