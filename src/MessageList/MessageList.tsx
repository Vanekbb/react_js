import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FC } from 'react';
import { Messages } from 'src/types';

  const css = `
  .chat {
    background-color: whitesmoke;
  }
  `



  interface MessageListProps {
    messages: Messages
  }

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <List className='chat'>
    <style>
    {css}
    </style>
      {messages?.map((message, idx) => (
        <ListItem key={idx}>
          {message.author}: {message.value}
        </ListItem>
      ))}
    </List>
  );
};
