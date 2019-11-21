import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBJ5J04QXE5k29z5ZshhuUJ4eWkdICVJ64",
  authDomain: "crownclothings.firebaseapp.com",
  databaseURL: "https://crownclothings.firebaseio.com",
  projectId: "crownclothings",
  storageBucket: "crownclothings.appspot.com",
  messagingSenderId: "470982093656",
  appId: "1:470982093656:web:181d27ec7395db2e3d132d",
  measurementId: "G-QKHRYJTTRT"
};

firebase.initializeApp(config);

export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  include_granted_scopes: true,
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
