import  firebase from 'firebase';
import { GoogleAuthProvider } from "firebase/auth";
import '@firebase/firestore'
import '@firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBRPzS9viMJR3OgHlq2X7ly74tVT4VnNfU",
    authDomain: "whatsapp-clone-407ec.firebaseapp.com",
    projectId: "whatsapp-clone-407ec",
    storageBucket: "whatsapp-clone-407ec.appspot.com",
    messagingSenderId: "283126116345",
    appId: "1:283126116345:web:68d72c4c32944c15785728",
    measurementId: "G-6STFXZK94S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth;
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;