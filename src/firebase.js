import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA65ij8laxKXhSv6n8E5IEVLFrtZmzsDDs",
    authDomain: "facebook-clone-b812b.firebaseapp.com",
    databaseURL: "https://facebook-clone-b812b.firebaseio.com",
    projectId: "facebook-clone-b812b",
    storageBucket: "facebook-clone-b812b.appspot.com",
    messagingSenderId: "658746662659",
    appId: "1:658746662659:web:a3bc43df17d428a4705336",
    measurementId: "G-YP38EZLTWH"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider}
  export default db;
