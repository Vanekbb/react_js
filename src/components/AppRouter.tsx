import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChatPage } from '/src/pages/ChatPage'
import { Main } from '/src/pages/Main'
import { Profile } from '/src/pages/Profile'
import { ChatList } from './ChatList'
import { Header } from './Header'


export const AppRouter: FC = () => (
    <Routes>
    <Route path='/' element={<Header />}>
    <Route index  element={<Main />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/chats'>
        <Route index element={<ChatList />} />
        <Route path=':chatId' element={<ChatPage />} />
      </Route>
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
)