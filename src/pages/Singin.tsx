import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '/src/store/profile/slice'
import style from './Singin.module.css';
import { useNavigate } from 'react-router-dom';
 
export const SingIn: FC = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError(false)
        if (login === 'gb' && password === 'gb') {
            dispatch(auth(true))
            navigate(-1)
        } else {
            setError(true)
        }
    }

    return <div>
        <h2>Sing In</h2>
        <form onSubmit={handleSubmit}>
            <p>Login:</p>
            <input type="text" onChange={(event) => setLogin(event.target.value)} value={login}/>
            <p>Password</p>
            <input type="password" onChange={(event) => setPassword(event.target.value)} value={password}/>
            <p><button>Login</button></p>
        </form>
        {error && <p className={style.error}>Login or Password is incorrect</p>}
    </div>
}