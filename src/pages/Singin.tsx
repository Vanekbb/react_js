import React, { FC, useState } from 'react'
import style from './Singin.module.css';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { logIn } from '/src/services/firebase';
 
export const SingIn: FC = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(Boolean)
    const navigate = useNavigate()
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')
        
        try {
            setLoading(true)
            await logIn(login, password)
            navigate('/chats')
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
        <h2>Sing In</h2>
        <form onSubmit={handleSubmit}>
            <p>Login:</p>
            <input type="email" onChange={(event) => setLogin(event.target.value)} value={login} required/>
            <p>Password</p>
            <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} required/>
            <p><button>Login</button></p>
        </form>
        {error && <p className={style.error}>{error}</p>}
        {loading && <CircularProgress />}
    </div>
}