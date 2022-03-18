// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBN5OLZqbKiafyuTXhscvgra_NQ3QhSsws",
//   authDomain: "thingdream-e1a93.firebaseapp.com",
//   projectId: "thingdream-e1a93",
//   storageBucket: "thingdream-e1a93.appspot.com",
//   messagingSenderId: "566700127244",
//   appId: "1:566700127244:web:33b40f0e2cf9d811d12a29",
//   measurementId: "G-N1JYKSB044"
// };


const firebaseConfig = {
  apiKey: "AIzaSyCJVJMDYOi_Yiw4WXO6MNkGS0k5OPmo5Q4",
  authDomain: "thingsdream-test-c0a3e.firebaseapp.com",
  projectId: "thingsdream-test-c0a3e",
  storageBucket: "thingsdream-test-c0a3e.appspot.com",
  messagingSenderId: "595809829046",
  appId: "1:595809829046:web:2d2b3d24a9d9ec4ee7a617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);