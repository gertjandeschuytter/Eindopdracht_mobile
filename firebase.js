// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWWE8_3RVDsNh7zcoh4JfkgJPu3t-53ms",
  authDomain: "fir-auth-3335b.firebaseapp.com",
  projectId: "fir-auth-3335b",
  storageBucket: "fir-auth-3335b.appspot.com",
  messagingSenderId: "878950275996",
  appId: "1:878950275996:web:c785bc31fe36cb7d794659",
  measurementId: "G-J1TNL5G02Q"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

 export { auth };