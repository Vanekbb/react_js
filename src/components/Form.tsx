import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom'
import { AUTHOR } from '../constants';
import { Button } from './Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import style from './Form.module.css'
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '/src/store/messages/slice';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '/src/store';

export const Form: FC = (() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>()

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      dispatch(addMessageWithReply({
        chatName: chatId,
        message: { author: AUTHOR.user, value },
      }));
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
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
