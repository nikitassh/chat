import * as React from 'react'
import { createContext, ReactNode, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, provider } from './firebase'

const AuthContext = createContext(null)


export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user] = useAuthState(auth)

    const onLogin = () => {
        auth.signInWithPopup(provider)
    }

    const signout = (callback: VoidFunction) => {
        // return fakeAuthProvider.signout(() => {
        //     setUser(null)
        //     callback()
        // })
    }

    const value = { user, onLogin, signout }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
