import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

//describe('App', () => {
//    it('render component', () => {
//        render(<App />)
//    })
//
//    it('send user message', async () => {
//        render(<App />)
//
//        const input = screen.getByTestId<HTMLInputElement>('input')
//        await userEvent.type(input, 'Hello, world!')
//
//        const button = screen.getByTestId('button')
//        await userEvent.click(button)
//
//        expect(screen.getAllByTestId('li').length).toBe(1)
//    })
//
//    it('bot answer', async () => {
//       render(<App />)
//
//        const input = screen.getByTestId<HTMLInputElement>('input')
//        await userEvent.type(input, 'Hello, world!')
//
//        const button = screen.getByTestId('button')
//        await userEvent.click(button)
//
//        expect(await screen.findByText(/Hi/, undefined, { timeout: 1501 })).toBeInTheDocument()
//    })
//})