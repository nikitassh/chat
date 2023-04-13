import { useAuth } from '../services/authProvider'

export const Login = () => {
    const { user, onLogin } = useAuth()
    console.log(user)
    return (
        <div>
            <button onClick={onLogin}>ЛОГИН СУКА</button>
        </div>
    )
}