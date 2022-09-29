import { CircularProgress } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { singUp } from '/src/services/firebase'
import style from './Singup.module.css';

export const SingUp: FC = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(Boolean)
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            setLoading(true)
            await singUp(login, password)
            navigate('/singin')
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError('error')
            }
        } finally {
            setLoading(false)
        }
    }

    return <div>
        <h2>Sing Up</h2>
        <form onSubmit={handleSubmit}>
            <p>Login:</p>
            <input type="email" onChange={(event) => setLogin(event.target.value)} value={login} required />
            <p>Password</p>
            <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} pattern='[a-zA-Z0-9_-{6,}' required />
            <p><button>Create account</button></p>
        </form>
        {error && <p className={style.error}>{error}</p>}
        {loading && <CircularProgress />}
    </div>
}
