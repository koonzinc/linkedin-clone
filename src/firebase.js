import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQaaisLjuVI6-qhA2AfzjIAbMUlV4Uhhc",
  authDomain: "linkedin-2e6ad.firebaseapp.com",
  projectId: "linkedin-2e6ad",
  storageBucket: "linkedin-2e6ad.appspot.com",
  messagingSenderId: "113191366387",
  appId: "1:113191366387:web:b6e8fd970e178a63d5d186"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };