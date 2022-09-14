import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { Profile } from './pages/Profile'
import { FC, useState } from "react"
import { ChatList } from './components/ChatList';
import { Chat, Messages } from './types';
import { ChatPage } from './pages/ChatPage';
import { AUTHOR } from './constants';
import { Header } from './components/Header';
import { Provider } from 'react-redux'
import { store } from './store';

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'first',
  },
  {
    id: '2',
    name: 'second',
  },
];

const defaultMessages: Messages = {
  '1': [{ author: AUTHOR.user, value: 'hello, world' }],
  '2': [{ author: AUTHOR.bot, value: 'hello, im bot' }],
};

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessages);

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    });
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  return (
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<Header />}>
      <Route index  element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/chats'>
          <Route index element={<ChatList chats={chats} onAddChat={onAddChat} />} />
          <Route path=':chatId' element={<ChatPage chats={chats} onAddChat={onAddChat} messages={messages} onAddMessage={onAddMessage} />} />
        </Route>
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
    </Provider>
  );
};

export default App;
