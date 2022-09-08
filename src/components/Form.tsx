import React, { FC, useState } from 'react';
import { AUTHOR } from '../constants';
import { Button } from './Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Message } from 'src/types';

interface FormProps {
  addMessage: (msg: Message) => void
}

export const Form: FC = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage({
      author: AUTHOR.user,
      value,
    });
    setValue('');
  };

  const css = `
  .form {
    margin-top: 20px;
    text-align: center;
    border: 3px solid black;
    border-radius: 200px;
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
      <Button label={'SEND'} disabled={!value}/>
      </p>
    </form>
  );
};
