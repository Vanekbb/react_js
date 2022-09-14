import { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const css = `
.ul {
    display: flex;
    justify-content: space-around
}
`

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
    }
]

export const Header: FC = () => {
    return <div>
        <style>
        {css}
      </style>
        <header>
            <ul className='ul'>
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