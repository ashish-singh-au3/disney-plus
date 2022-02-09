import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnwaF8IYIl-cvyWFcOP3Q_HJMvc_ODp2w",
  authDomain: "disney-84db3.firebaseapp.com",
  projectId: "disney-84db3",
  storageBucket: "disney-84db3.appspot.com",
  messagingSenderId: "443138114097",
  appId: "1:443138114097:web:b010d79da575cb041a8b10",
  measurementId: "G-WQ5STHS77C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
