import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAj8EPjT3Lv67cNQAkuHNfv3ylpAW_Ly28",
    authDomain: "seminario2-9d8bc.firebaseapp.com",
    projectId: "seminario2-9d8bc",
    storageBucket: "seminario2-9d8bc.appspot.com",
    messagingSenderId: "748836566799",
    appId: "1:748836566799:web:2d06992a4b6cf486a8f07a"
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
