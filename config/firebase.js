// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALXi0QOFb7C9lasZ8sh6Q0hwLF_mKabVE",
  authDomain: "reatcarv1.firebaseapp.com",
  projectId: "reatcarv1",
  storageBucket: "reatcarv1.appspot.com",
  messagingSenderId: "974594595059",
  appId: "1:974594595059:web:3f5432f9c2035df0d63f86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
