import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAYMowc2ZP4EZP5DR4wWepmn8SccRkZDvM",
    authDomain: "netflix-931bd.firebaseapp.com",
    projectId: "netflix-931bd",
    storageBucket: "netflix-931bd.appspot.com",
    messagingSenderId: "523408651908",
    appId: "1:523408651908:web:ae7a4ba0a12e0c4ffb34d1"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }