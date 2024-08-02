// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYC3L7IkzJ0zLJ-vX_ihBClHqpfXjL3u0",
  authDomain: "pantry-tracker-7cc35.firebaseapp.com",
  projectId: "pantry-tracker-7cc35",
  storageBucket: "pantry-tracker-7cc35.appspot.com",
  messagingSenderId: "823196871380",
  appId: "1:823196871380:web:c0ecfb37a817224827e941",
  measurementId: "G-MD1Z9V6YZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
const firestore = getFirestore(app);

export default firestore;