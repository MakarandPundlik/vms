import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA7mPjrMmC6v2grTxBNQTIMHiUtMewVmpQ",
    authDomain: "vmscontrols-222a2.firebaseapp.com",
    projectId: "vmscontrols-222a2",
    storageBucket: "vmscontrols-222a2.appspot.com",
    messagingSenderId: "19726495029",
    appId: "1:19726495029:web:6fa41ed9c786e2c8c6707c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;