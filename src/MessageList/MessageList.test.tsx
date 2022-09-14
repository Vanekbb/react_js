import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';
import { Messages } from 'src/types';
import { AUTHOR } from 'src/constants';

describe('MessageList', () => {
    it('render component', () => {
        render(<MessageList messages={[]} />)
    })

    it('messageslist is empty', () => {
        render(<MessageList messages={[]} />)
        expect(screen.queryAllByRole('li').length).toBe(0)
    })

    it('messageslist lenght is 2', () => {
        const messages: Messages = [
        {
            author: AUTHOR.user,
            value: 'first',
        },
        {
            author: AUTHOR.user,
            value: 'second',
        }
    ]
        render(<MessageList messages={messages} />)
        expect(screen.getAllByTestId('li').length).toBe(2)
        expect(screen.getAllByTestId('li')[0].innerHTML).toBe('User: first')
    })
})