import { FC, useEffect, useState } from 'react'
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
import { SingUp } from '/src/pages/Singup'
import { firebaseAuth } from '/src/services/firebase'
import { useDispatch } from 'react-redux'
import { auth } from '/src/store/profile/slice'
import { onValue, ref } from 'firebase/database'
import { getChats } from '/src/services/firebase'
import { db } from '/src/services/firebase'


export const AppRouter: FC = () => {
  const dispatch = useDispatch()

  const [chats, setChats] = useState<any[]>([])
  const [messages, setMessages] = useState<any>({})

  useEffect(() => {
    const autUnsubcribe = firebaseAuth.onAuthStateChanged((user: any) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    
    const chatsUnsubcribe = onValue(getChats(), (snapshot) => {
      const data = snapshot.val() || {}
      setChats([...Object.values(data)])
    })

    const messagesUnsubcribe = onValue(ref(db, 'messages'), (snapshot) => {
      const data = snapshot.val() || {}
      setMessages(data)
    })

    return () => {
      autUnsubcribe()
      chatsUnsubcribe()
      messagesUnsubcribe()
    }
  }, [])

  return (
    <Routes>
    <Route path='/' element={<Header />}>
    <Route index  element={<Main />} />
    <Route path='/singin' element={<PublicRoute component={<SingIn />} />} />
    <Route path='/singup' element={<PublicRoute component={<SingUp />} />} />
      <Route path='/profile' element={<PrivateRoute component={<Profile />} />} />
      <Route path='/chats' element={<PrivateRoute />}>
        <Route index element={<ChatList chats={chats} messages={messages} />} />
        <Route path=':chatId' element={<ChatPage chats={chats} messages={messages}/>} />
      </Route>
      <Route path='/articles' element={<Articles />} />
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
)}