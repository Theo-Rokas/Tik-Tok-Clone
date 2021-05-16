import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCZKVuhULiAuywJhS1giuggGsmgD8lkTMI",
  authDomain: "tik-tok-clone-72f08.firebaseapp.com",
  projectId: "tik-tok-clone-72f08",
  storageBucket: "tik-tok-clone-72f08.appspot.com",
  messagingSenderId: "882312595142",
  appId: "1:882312595142:web:65a0f16aa185d9920a79c7",
  measurementId: "G-L1MG1B0QGC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db