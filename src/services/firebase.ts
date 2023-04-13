import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCIB3oQBCdlEhSnznUB4RVvZ_Nni9Hy6bs',
    authDomain: 'chat-83bf4.firebaseapp.com',
    projectId: 'chat-83bf4',
    storageBucket: 'chat-83bf4.appspot.com',
    messagingSenderId: '420121357575',
    appId: '1:420121357575:web:efda28b3f1d7d28a80a9a2',
    measurementId: 'G-GYD6MVV29M',
}


firebase.initializeApp(firebaseConfig)
// const db = app.firestore

export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()
