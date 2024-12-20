// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcJX3C7P-J3jbMekgFyPWod3I3DbnTXuo",
  authDomain: "backend-demo-9e778.firebaseapp.com",
  projectId: "backend-demo-9e778",
  storageBucket: "backend-demo-9e778.firebasestorage.app",
  messagingSenderId: "163529301660",
  appId: "1:163529301660:web:309f2762babfb975875759",
  measurementId: "G-V2VV83B9W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()