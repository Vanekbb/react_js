import { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import style from './Header.module.css';


const navigate = [
    {
        name: 'Main',
        path: '/'
    },
    {
        name: 'Chats',
        path: '/chats'
    },
    {
        name: 'Profile',
        path: '/profile'
    },
]

export const Header: FC = () => {
    return <div>
        <header>
            <ul className={style.ul}>
                {navigate.map((item, idx) => (
                    <li key={idx}>
                        <NavLink to={item.path} style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue',
                        })}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}