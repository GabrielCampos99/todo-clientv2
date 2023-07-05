import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Input from '.';

describe('Input component', () => {
  test('Render input with label', () => {
    render(<Input label="Learn React" />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('Render input without label', () => {
    render(<Input />);
    const labelElement = screen.queryByRole('label');
    expect(labelElement).not.toBeInTheDocument();
  });

  test('Displays the error message correctly when provided', () => {
    const error = 'Campo obrigatório.';
    render(<Input error={error} />);
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });

  test('Applies the correct CSS class when there is an error', () => {
    const error = 'Campo obrigatório.';
    render(<Input error={error} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('border-red-500');
  });
});
// eslint-disable-next-line spaced-comment
//screen.logTestingPlaygroundURL();
