import MUIButton from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { FC } from 'react';

interface ButtonProps {
    label: string
    disabled?: boolean
    click?: void
  }

export const Button: FC<ButtonProps> = ({ label, disabled = false, click = () => null }) => {
    return (
    <MUIButton disabled={disabled} variant="contained" endIcon={<SendIcon />} type='submit' onClick={click}>
        {label}
    </MUIButton>
    )
}