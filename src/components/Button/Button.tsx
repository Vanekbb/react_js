import MUIButton from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { FC } from 'react';
import { render } from '@testing-library/react';

interface ButtonProps {
    label: string
    disabled?: boolean
    click?: void
    children: React.ReactNode
    render?: (label: string) => JSX.Element
}

export const Button: FC<ButtonProps> = ({ disabled = false, render }) => {
    return (
        <MUIButton data-testid='button' disabled={disabled} variant="contained" endIcon={<SendIcon />} type='submit'>
            {render && render('SEND')}
        </MUIButton>
    )
}