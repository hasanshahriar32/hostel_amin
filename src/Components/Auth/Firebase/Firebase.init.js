// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUBKkEQuThjVsf6oA6OEyPUax4Oz_6DM8",
  authDomain: "amin-mess.firebaseapp.com",
  projectId: "amin-mess",
  storageBucket: "amin-mess.appspot.com",
  messagingSenderId: "156407238682",
  appId: "1:156407238682:web:df6d3fb23b65fe5e2101a3",
  measurementId: "G-P1EGH64KNF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
