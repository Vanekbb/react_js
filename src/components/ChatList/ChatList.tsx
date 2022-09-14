import { ListItem } from "@mui/material"
import React, { FC, useState } from "react"
import { Chat } from "src/types"
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom'


interface ChatListProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
  }
  
  export const ChatList: FC<ChatListProps> = ({ chats, onAddChat }) => {
    const [value, setValue] = useState('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (value) {
        onAddChat({
          id: nanoid(),
          name: value,
        });
        setValue('');
      }
    };
    return (
    <div>
        <ul>
            {chats.map((chat) => (
            <ListItem key={chat.id}>
                <NavLink to={`/chats/${chat.id}`}>{chat.name}</NavLink>
            </ListItem>
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={(event) => setValue(event.target.value)} type="text" />
            <button>create chat</button>
        </form>
    </div>
    )
}