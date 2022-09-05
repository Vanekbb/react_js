import { Button } from './Button'
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('Button', () => {
    it('render component', () => {
      render(<Button label="test" />);
    });

    it('render button click', () => {
        render(<Button label="test" />)
        userEvent.click(<Button />)
    })

    it('render component with text', () => {
        render(<Button label="test" />);
    
        expect(screen.getByText(/test/)).toBeInTheDocument();
      });
})



