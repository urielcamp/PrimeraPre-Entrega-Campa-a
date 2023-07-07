
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_API_KEY}`,
    authDomain: "proyectoreactjs-4e568.firebaseapp.com",
    projectId: "proyectoreactjs-4e568",
    storageBucket: "proyectoreactjs-4e568.appspot.com",
    messagingSenderId: "735307125705",
    appId: "1:735307125705:web:86f14c7e2ba50cbc784e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);