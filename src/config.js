// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // import firebase from 'firebase/app';
// // import 'firebase/auth';

// const firebaseConfig = firebase.initializeApp({
//     apiKey: "AIzaSyDGrrBblLqTvlrVsFJLTzi4_2wJtJP54Vg",
//     authDomain: "react-auth-56480.firebaseapp.com",
//     projectId: "react-auth-56480",
//     storageBucket: "react-auth-56480.appspot.com",
//     messagingSenderId: "532793858798",
//     appId: "1:532793858798:web:2cda0dc586e06274ee71ff",
//     measurementId: "G-ZN04XNCFP6"
//   });

//   // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from 'firebase/auth';
// import firebase from 'firebase'
// require('firebase/auth')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyDGrrBblLqTvlrVsFJLTzi4_2wJtJP54Vg",
//   authDomain: "react-auth-56480.firebaseapp.com",
//   projectId: "react-auth-56480",
//   storageBucket: "react-auth-56480.appspot.com",
//   messagingSenderId: "532793858798",
//   appId: "1:532793858798:web:2cda0dc586e06274ee71ff",
//   measurementId: "G-ZN04XNCFP6"
// });

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// export default firebaseConfig;

// Import the specific functions you need from the SDKs
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGrrBblLqTvlrVsFJLTzi4_2wJtJP54Vg",
    authDomain: "react-auth-56480.firebaseapp.com",
    projectId: "react-auth-56480",
    storageBucket: "react-auth-56480.appspot.com",
    messagingSenderId: "532793858798",
    appId: "1:532793858798:web:2cda0dc586e06274ee71ff",
    measurementId: "G-ZN04XNCFP6"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

export default app;