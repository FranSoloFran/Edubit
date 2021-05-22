import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA7-F5Av__j6yLQ4grKOLXchuIil0FGHYw",
    authDomain: "seminario2-35d5f.firebaseapp.com",
    projectId: "seminario2-35d5f",
    storageBucket: "seminario2-35d5f.appspot.com",
    messagingSenderId: "775130994958",
    appId: "1:775130994958:web:1c68d4a673c1f1ebc4df5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export{
    db,
    googleAuthProvider,
    firebase
}