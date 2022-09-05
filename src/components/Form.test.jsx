import { Form } from "./Form";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


describe('MessageList', () => {
    it('render component', () => {
        render(<Form />)
    })

    it('render component with text', () => {
        render(<Form />)
        expect(screen.getByText(/SEND/)).toBeInTheDocument()
    }) 

})