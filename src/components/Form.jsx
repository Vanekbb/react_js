import { useState } from 'react';
import { AUTHOR } from '../constants';
import style from './Form.css';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage({
      author: AUTHOR.user,
      value,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <p>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </p>
      <p>
        <button disabled={!value} className="btn">
          SEND
        </button>
      </p>
    </form>
  );
};
