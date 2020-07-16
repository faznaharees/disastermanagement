import firebase from 'firebase'
import firestore from 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBoE7MzRMnp2Gr1B3F3Ys5Pg_rUr13XCgY",
    authDomain: "cmdf-7e03b.firebaseapp.com",
    databaseURL: "https://cmdf-7e03b.firebaseio.com",
    projectId: "cmdf-7e03b",
    storageBucket: "cmdf-7e03b.appspot.com",
    messagingSenderId: "1048361796436",
    appId: "1:1048361796436:web:c5639d08413b8a99c5fec1",
    measurementId: "G-0CR5ZR79VF"
  };

  firebase.initializeApp(firebaseConfig);

 export const db = firebase.firestore();
 export const auth = firebase.auth();
//  db.settings({ timestampsInSnapShots:true});