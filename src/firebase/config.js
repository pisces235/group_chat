import firebase from 'firebase/app';


import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDWZUgWeYUevXyvLEzxS6UELbPDWJxNK9A",
  authDomain: "electron-chat-app-f38fc.firebaseapp.com",
  databaseURL: "https://electron-chat-app-f38fc-default-rtdb.firebaseio.com",
  projectId: "electron-chat-app-f38fc",
  storageBucket: "electron-chat-app-f38fc.appspot.com",
  messagingSenderId: "611315237184",
  appId: "1:611315237184:web:f49b7b6d41124e3458faa5",
  measurementId: "G-S1DR7N457N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
