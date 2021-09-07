import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAJgRXwGeCDd4pCuvks1QQ6voLzD-0SA5g",
    authDomain: "url-shortner-f9ff2.firebaseapp.com",
    projectId: "url-shortner-f9ff2",
    storageBucket: "url-shortner-f9ff2.appspot.com",
    messagingSenderId: "207334417479",
    appId: "1:207334417479:web:1022795106bd561d5d7d62"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider()
const email= new firebase.auth.EmailAuthProvider()
const storage= firebase.storage()

export {db,provider,storage,auth,email}