import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebase'

export const Home = () => {
    // @ts-ignore
    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    if (!user) {
        navigate('/login')
    }

    return (
        <div>
            Home
        </div>
    )
}