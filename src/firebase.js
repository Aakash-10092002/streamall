import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCrSTXBg9_CyvAIJ2HnVnc3CK2XEwpUxHQ",
  authDomain: "streamall-byaakash.firebaseapp.com",
  projectId: "streamall-byaakash",
  storageBucket: "streamall-byaakash.appspot.com",
  messagingSenderId: "512281838348",
  appId: "1:512281838348:web:08f397454e1173009dff29",
  measurementId: "G-V3H2QBSMSV"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db;