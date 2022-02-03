import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

// FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyCM9aa-5Z5HPQDkmIoHjLyUSgnttMK8eSU",
    authDomain: "wordle-1d6ba.firebaseapp.com",
    projectId: "wordle-1d6ba",
    storageBucket: "wordle-1d6ba.appspot.com",
    messagingSenderId: "743909993942",
    appId: "1:743909993942:web:bc90066898b3c81f334877"
  };

// INITIALIZING THE FIREBASE APP
firebase.initializeApp(firebaseConfig);

// FIRESTORE SERVICE
const db = firebase.firestore();

// AUTHENTICATION SERVICE
const auth = firebase.auth();

// STORAGE SERVICE
const storage = firebase.storage();

// TIMESTAMP
const timestamp = firebase.firestore.Timestamp;

export {db, auth, storage, timestamp};