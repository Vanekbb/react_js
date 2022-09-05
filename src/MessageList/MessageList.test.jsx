import { MessageList } from './MessageList'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
//import userEvent from '@testing-library/user-event'

describe('MessageList', () => {
    it('render component', () => {
        render(<MessageList />)
    })  
})