import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom'
import { AUTHOR } from '../constants';
import { Button } from './Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Message } from 'src/types';


interface FormProps {
  addMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = (({ addMessage }) => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      addMessage(chatId, {
        author: AUTHOR.user,
        value,
      });
    }
    setValue('');
  };

  const css = `
  .form {
    margin-top: 20px;
    text-align: center;
    border: 3px solid black;
    background-color: white;
  }
  `

  return (
    <form onSubmit={handleSubmit} className="form">
      <style>
        {css}
      </style>
      <p>
        <TextField
          inputProps={{ 'data-testid': 'input' }}
          autoFocus={true}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          id="input-with-icon-textfield"
          label="User"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </p>
      <p>
        <Button disabled={!value} render={(label: string) => <div>{label}</div>}></Button>
      </p>
    </form>
  );
});
