import { useEffect } from 'react';
import { useState, FC } from 'react';
import { Form } from './components/Form';
import { AUTHOR } from './constants';
import { MessageList } from './MessageList/MessageList';
import { Message, Messages } from './types';

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>([]);

  const addMessage = (newMessage: Message) => {
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
