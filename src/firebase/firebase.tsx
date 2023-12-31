// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpUA7o7Gi7UByNFx9kt7l713AW3aZ4_eQ",
  authDomain: "codevers-b2d1c.firebaseapp.com",
  projectId: "codevers-b2d1c",
  storageBucket: "codevers-b2d1c.appspot.com",
  messagingSenderId: "660688779901",
  appId: "1:660688779901:web:6c55fa3b53f2beca748f14",
  measurementId: "G-52EW7QC62K"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
let analytics
if(typeof window!== "undefined"){
  analytics=getAnalytics(app)
}

const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth,firestore,app};