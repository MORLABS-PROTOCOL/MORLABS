// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpl7z8_erjKucN70lnJ_gSQ5yl6RN4P30",
    authDomain: "morlabs-protocol.firebaseapp.com",
    projectId: "morlabs-protocol",
    storageBucket: "morlabs-protocol.appspot.com",
    messagingSenderId: "247574260942",
    appId: "1:247574260942:web:9806aaf382fbc649b2349f",
    measurementId: "G-TCH05NQZBN"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
export const db = getFirestore(fireapp)