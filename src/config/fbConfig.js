import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyA2MIVYT8ThqTKva3M1KLCsgqzZf9NBxRM",
    authDomain: "line-5b891.firebaseapp.com",
    databaseURL: "https://line-5b891.firebaseio.com",
    projectId: "line-5b891",
    storageBucket: "line-5b891.appspot.com",
    messagingSenderId: "525960292738",
    appId: "1:525960292738:web:bf90cc00143cac9432879b",
    measurementId: "G-0HQH98NDTL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase