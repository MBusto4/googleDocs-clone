
// import { initializeApp, getApps, getApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import { getStorage } from "firebase/storage";
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDesJrJXb05w5chrQuXUWgzDB9zP8ui2t4",
    authDomain: "docs-clone-7237c.firebaseapp.com",
    projectId: "docs-clone-7237c",
    storageBucket: "docs-clone-7237c.appspot.com",
    messagingSenderId: "89534199583",
    appId: "1:89534199583:web:1baa8a583cbcb76ca6222a"
};

// firebase v8
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()

export { db }



//firebase v9
// Initialize Firebase
//get the apps we initialized if the length of that is null initialize a new app otherwise use the current app 
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore()
// const storage = getStorage()

// export { app, db, storage }