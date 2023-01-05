import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUzT665ifGeYHh1ADRdAYrskioPC1Hijc",
    authDomain: "udemy-vue-firebase-24898.firebaseapp.com",
    projectId: "udemy-vue-firebase-24898",
    storageBucket: "udemy-vue-firebase-24898.appspot.com",
    messagingSenderId: "1068229868677",
    appId: "1:1068229868677:web:3c60d9925e1c096b627dec"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()


  export { projectFirestore }