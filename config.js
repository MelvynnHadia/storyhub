import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBRe3mDUyeboBEC48gGm6Q5nMQUyNBMPYo",
    authDomain: "storyhub-4cf33.firebaseapp.com",
    projectId: "storyhub-4cf33",
    storageBucket: "storyhub-4cf33.appspot.com",
    messagingSenderId: "510710825693",
    appId: "1:510710825693:web:62c462a3f315b85c961134",
    measurementId: "G-FQH26F13F9"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()