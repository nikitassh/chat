import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, provider } from '../services/firebase'

export const Login = () => {
    // @ts-ignore
    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }

    const onLogin = () => {
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button onClick={onLogin}>ЛОГИН СУКА</button>
        </div>
    )
}