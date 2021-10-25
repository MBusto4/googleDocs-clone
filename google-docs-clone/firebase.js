
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAbjO7NbQA_HDTo0hqUP9aQMSl9xlee_kE",
    authDomain: "docs-clone-6f70e.firebaseapp.com",
    projectId: "docs-clone-6f70e",
    storageBucket: "docs-clone-6f70e.appspot.com",
    messagingSenderId: "413521747041",
    appId: "1:413521747041:web:2de025cc208b9ef7909e20"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()

export { db }