// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUfsWtv9fTed4Piont3BWr4_02aJKbVTU",
  authDomain: "auth-moha-milon-a9abd.firebaseapp.com",
  projectId: "auth-moha-milon-a9abd",
  storageBucket: "auth-moha-milon-a9abd.appspot.com",
  messagingSenderId: "1007661323234",
  appId: "1:1007661323234:web:62c56db88263c2054c5fbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;