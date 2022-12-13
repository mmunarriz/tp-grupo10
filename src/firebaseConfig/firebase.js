import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjexxHYDxMTIW_r8IaXyHeKBq6CGwXjms",
  authDomain: "tp-grupo10.firebaseapp.com",
  projectId: "tp-grupo10",
  storageBucket: "tp-grupo10.appspot.com",
  messagingSenderId: "1018239703858",
  appId: "1:1018239703858:web:698ce9a78153dc7e20152b"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);
