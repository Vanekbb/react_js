import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button >test</Button>);
  });



  it('render component with text', () => {
    render(<Button>test</Button>);

    expect(screen.getByText(/test/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Button >test</Button>
        <Button >test</Button>
      </>
    );

    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<Button disabled>test</Button>);

    expect(screen.getByText(/test/)).toBeDisabled();
  });


  it('test example', async () => {
    const onChange = jest.fn();
    render(<input type="checkbox" onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    await userEvent.dblClick(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).not.toBeChecked();
  });
});