import { ListItem } from "@mui/material"
import React, { FC, useState } from "react"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "/src/store/messages/slice";
import { selectChats } from "/src/store/messages/selectors";
import { nextTick } from "process";

  export const ChatList: FC = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const chats = useSelector(selectChats, (prev, next) => prev.length === next.length)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (value) {
        dispatch(addChat(value));
        setValue('');
      }
    };
    return (
    <div>
        <ul>
            {chats.map((chat) => (
            <ListItem key={chat.id}>
                <NavLink to={`/chats/${chat.name}`}>{chat.name}</NavLink>
                <button onClick={() => dispatch(deleteChat(chat.name))}>Delete Chat</button>
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