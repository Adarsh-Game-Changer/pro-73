import firebase from "firebase"

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCyK9Or4rNoz66J55dK8KpIkv4d_wXv7DY",
    authDomain: "proooooooooo-c71.firebaseapp.com",
    projectId: "proooooooooo-c71",
    storageBucket: "proooooooooo-c71.appspot.com",
    messagingSenderId: "318559544959",
    appId: "1:318559544959:web:b594013f906b89af1c814a"
  };
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
