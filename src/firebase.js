import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCYfG9UkWL7hSZIW0NKIA7KZnNhjkr-CvU",
  authDomain: "tinder-clone-4ce7f.firebaseapp.com",
  projectId: "tinder-clone-4ce7f",
  storageBucket: "tinder-clone-4ce7f.appspot.com",
  messagingSenderId: "13385594612",
  appId: "1:13385594612:web:88675df9fc11fe2db390a1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database; 