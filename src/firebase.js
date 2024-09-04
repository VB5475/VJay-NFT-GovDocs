// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdJQLeRGVpx5mJk9mqUCsQ1BZXADogrUg",
  authDomain: "sih-2023-45814.firebaseapp.com",
  projectId: "sih-2023-45814",
  storageBucket: "sih-2023-45814.appspot.com",
  messagingSenderId: "520337714908",
  appId: "1:520337714908:web:1a1505788296c07b398e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export {app,auth}
