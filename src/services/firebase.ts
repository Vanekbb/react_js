import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAXcbZUUkxrKo34hABnx4IO-5s1ow83X8E",
    authDomain: "react-08-22-d64ea.firebaseapp.com",
    databaseURL: "https://react-08-22-d64ea-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-08-22-d64ea",
    storageBucket: "react-08-22-d64ea.appspot.com",
    messagingSenderId: "116809359691",
    appId: "1:116809359691:web:876a02d98d356c105488ce",
    measurementId: "G-0EJPJLHL5J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app)

export const singUp = async (email: string, password: string) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const logIn = async (email: string, password: string) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

export const db = getDatabase(app)

export const getChats = () => ref(db, 'chats')
