import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATOgV9sGtJlplf9gEXlPVNhRffXBIlYjs",
    authDomain: "appchat-6f22c.firebaseapp.com",
    projectId: "appchat-6f22c",
    storageBucket: "appchat-6f22c.appspot.com",
    messagingSenderId: "613146533447",
    appId: "1:613146533447:web:70034ad58e7d02a2b35b62"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };