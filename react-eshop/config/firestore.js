// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = import.meta.env.VITE_FIRESTORE_API;
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "collectable-cars.firebaseapp.com",
	projectId: "collectable-cars",
	storageBucket: "collectable-cars.appspot.com",
	messagingSenderId: "738757002282",
	appId: "1:738757002282:web:6d307406e36d690f9cef53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
