// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDUaI6pWtz6SwBkSXas7tDgiHXLyinFX0Y",
  authDomain: "dashboard-authentication-1160a.firebaseapp.com",
  projectId: "dashboard-authentication-1160a",
  storageBucket: "dashboard-authentication-1160a.appspot.com",
  messagingSenderId: "627673983776",
  appId: "1:627673983776:web:0b2d7cda7b5fff67360545",
  measurementId: "G-3FVZS6PV9E"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle= ()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
}
