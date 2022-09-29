import { ListItem } from "@mui/material"
import React, { FC, useState } from "react"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { set, remove, ref, push } from "firebase/database";
import { db } from "/src/services/firebase";
import { nanoid } from "nanoid";

export const ChatList: FC<any> = ({ chats }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      set(ref(db, `chats/${value}`), {
        id: nanoid(),
        name: value
      })

      set(ref(db, `messages/${value}`), {
        name: value
      })

      setValue('');
    }
  };

  const handleDelete = (chatName: string) => {
    remove(ref(db, `chats/${chatName}`))
  }

  return (
    <div>
      <ul>
        {chats.map((chat: any) => (
          <ListItem key={chat.id}>
            <NavLink to={`/chats/${chat.name}`}>{chat.name}</NavLink>
            <button onClick={() => handleDelete(chat.name)}>Delete Chat</button>
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