import { useEffect } from 'react';
import { useState } from 'react';
import { Form } from './components/Form';
import { AUTHOR } from './constants';
import { MessageList } from './MessageList/MessageList';

export const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          value: 'Hi',
        });
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </div>
  );
};

export default App;
