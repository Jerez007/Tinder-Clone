import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBPjzL0e6B52aPP682T3fb4O7Aj4gfIf0k",
  authDomain: "tinder-clone-10514.firebaseapp.com",
  databaseURL: "https://tinder-clone-10514-default-rtdb.firebaseio.com",
  projectId: "tinder-clone-10514",
  storageBucket: "tinder-clone-10514.appspot.com",
  messagingSenderId: "954760153856",
  appId: "1:954760153856:web:6037fefda4fae0bed6c1e5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database; 