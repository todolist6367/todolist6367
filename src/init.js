import firebase from 'firebase/app';
import 'firebase/firestore';
  var firebaseConfig = {
	apiKey: "AIzaSyCkpxqmOupU1ZIIIXk3uDZjo-VLt13hnJk",
    authDomain: "listadetareas-31942.firebaseapp.com",
    projectId: "listadetareas-31942",
    storageBucket: "listadetareas-31942.appspot.com",
    messagingSenderId: "709262180226",
    appId: "1:709262180226:web:1999ae43cc0a183eaf199b",
    measurementId: "G-7YY5YNT9L9"
  };
const fb = firebase.initializeApp(firebaseConfig)
export const db = fb.firestore();