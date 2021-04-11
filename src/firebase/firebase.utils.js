import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDKcAmRoGWtUC9qeilW-BIt9fcHihUuPhg',
  authDomain: 'crwn-db-fbce2.firebaseapp.com',
  projectId: 'crwn-db-fbce2',
  storageBucket: 'crwn-db-fbce2.appspot.com',
  messagingSenderId: '150059958557',
  appId: '1:150059958557:web:3824e3f861b6f4d9d721f4',
  measurementId: 'G-QKM0G4P15E',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
