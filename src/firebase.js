// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD20AFsQnIM_C8-LoqDwpRqi6Pkal21860",
  authDomain: "unite-testing-6a47b.firebaseapp.com",
  projectId: "unite-testing-6a47b",
  storageBucket: "unite-testing-6a47b.firebasestorage.app",
  messagingSenderId: "522800619957",
  appId: "1:522800619957:web:1c04bc7119ea1963beb9fc",
  measurementId: "G-V25970974T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
