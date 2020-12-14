import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyAMH0I1gdtZ7mHLgpKE5BvkP02blBvAbEk",
  authDomain: "livroteca-bd.firebaseapp.com",
  databaseURL: "https://livroteca-bd-default-rtdb.firebaseio.com/",
  projectId: "livroteca-bd",
  storageBucket: "livroteca-bd.appspot.com",
  messagingSenderId: "269088387894",
  appId: "1:269088387894:web:de5f219fac079c71fb3997",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database()
const auth = firebase.auth()
const booksRef = db.ref('books')

export { db, auth, booksRef }