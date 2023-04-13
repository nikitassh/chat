import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { AuthProvider } from './services/authProvider'

export default function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}