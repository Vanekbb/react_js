import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FC } from 'react';
import { Messages } from 'src/types';

  const css = `
  .chat {
    background-color: whitesmoke;
  }

  .chat-list {
    left:47%
  }
  `



  interface MessageListProps {
    messages: Messages[]
  }

export const MessageList: FC<any> = ({ messages }) => {
  return (
    <List className='chat'>
    <style>
    {css}
    </style>
      {messages?.map((message: any, idx: number) => (
        <ListItem className='chat-list' key={idx} data-testid='li'>
          {message.author}: {message.value}
        </ListItem>
      ))}
    </List>
  );
};
