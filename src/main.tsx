import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp({
        apiKey: 'AIzaSyCIB3oQBCdlEhSnznUB4RVvZ_Nni9Hy6bs',
        authDomain: 'chat-83bf4.firebaseapp.com',
        projectId: 'chat-83bf4',
        storageBucket: 'chat-83bf4.appspot.com',
        messagingSenderId: '420121357575',
        appId: '1:420121357575:web:efda28b3f1d7d28a80a9a2',
        measurementId: 'G-GYD6MVV29M',
    },
)

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


// @ts-ignore
ReactDOM.render(<Context.Provider value={{ firebase, auth, firestore }}>
        <App />
    </Context.Provider>,
    document.getElementById('root'),
)