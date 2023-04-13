import React, { useContext } from 'react'

import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'
import './App.css'

import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from './components/Loader'
import { Context } from './main'
// @ts-ignore
import { BrowserRouter } from 'react-router-dom'


const App = () => {
    // @ts-ignore
    const { auth } = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App