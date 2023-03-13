// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvUIZ32Gi8-t9gtga0Ivr8bmYdbPFqljA",
  authDomain: "crown-clothing-75cb1.firebaseapp.com",
  projectId: "crown-clothing-75cb1",
  storageBucket: "crown-clothing-75cb1.appspot.com",
  messagingSenderId: "227787515561",
  appId: "1:227787515561:web:d035d5981b64cca1542bb8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth) => {
  console.log("userAuth", userAuth);
  const userDocRef = doc(db, "users", userAuth.uid); //
  console.log("ref", userDocRef);
  const userDocument = await getDoc(userDocRef);
  console.log("getDoc", userDocument);
  /*
  if (!userDocument.exists()) {
    console.log("user not exists");
    const { displayName, email } = userAuth;
    const { createdAt } = userAuth.metadata;
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (e) {
      console.log(e);
    }
  } else console.log("user exists");
  return userDocRef;
  */
};
export const createWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.message === "Firebase: Error (auth/wrong-password).")
      alert("Wrong password inserted");
    if (error.message === "Firebase: Error (auth/user-not-found).")
      alert("User does not exist");
    if (error.message.includes("too-many-requests"))
      alert("Too many requests attempted");
  }
};
