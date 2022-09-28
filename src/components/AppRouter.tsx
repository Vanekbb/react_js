import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChatPage } from '/src/pages/ChatPage'
import { Main } from '/src/pages/Main'
import { Profile } from '/src/pages/Profile'
import { ChatList } from './ChatList'
import { Header } from './Header'
import { Articles } from '/src/pages/Articles'
import { SingIn } from '/src/pages/Singin'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter: FC = () => (
    <Routes>
    <Route path='/' element={<Header />}>
    <Route index  element={<Main />} />
    <Route path='/singin' element={<PublicRoute component={<SingIn />} />} />
      <Route path='/profile' element={<PrivateRoute component={<Profile />} />} />
      <Route path='/chats' element={<PrivateRoute />}>
        <Route index element={<ChatList />} />
        <Route path=':chatId' element={<ChatPage />} />
      </Route>
      <Route path='/articles' element={<Articles />} />
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
)