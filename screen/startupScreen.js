import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDAGrLe91_QVrFRNo77ltpNguHtVIAhrWc",
    authDomain: "jobsmt-5c046.firebaseapp.com",
    databaseURL: "https://jobsmt-5c046.firebaseio.com",
    projectId: "jobsmt-5c046",
    storageBucket: "jobsmt-5c046.appspot.com",
    messagingSenderId: "1056043113598",
    appId: "1:1056043113598:web:4615f6435bd57b2c858c2f",
    measurementId: "G-V72FZYG97G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();