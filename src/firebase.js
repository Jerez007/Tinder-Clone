import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAESHN7ZL2KeBHq8-Oyb61fstbhEKGbuss",
  authDomain: "tinder-clone-fbdc4.firebaseapp.com",
  projectId: "tinder-clone-fbdc4",
  storageBucket: "tinder-clone-fbdc4.appspot.com",
  messagingSenderId: "351428011220",
  appId: "1:351428011220:web:46c3caa6861d0f1aa0c741",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database; 