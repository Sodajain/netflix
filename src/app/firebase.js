import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCfmK9FzUXDxZ5BZY8ZSUrHgD943kDDEOg",
    authDomain: "papadflix.firebaseapp.com",
    projectId: "papadflix",
    storageBucket: "papadflix.appspot.com",
    messagingSenderId: "774452259197",
    appId: "1:774452259197:web:eff54e8f3945ce3452c414"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };
