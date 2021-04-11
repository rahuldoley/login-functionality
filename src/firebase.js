import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVIzjDReLC4SZr_0M-4_o70TztJNrjgiM",
    authDomain: "login-functionality-8124d.firebaseapp.com",
    projectId: "login-functionality-8124d",
    storageBucket: "login-functionality-8124d.appspot.com",
    messagingSenderId: "50420600526",
    appId: "1:50420600526:web:46db929a5b5b8dab3b0a9f",
    measurementId: "G-LLG74TGS50"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };