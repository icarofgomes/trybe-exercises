import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testing input elements', () => {
  it('Testing name field', () => {
    const { getByTestId } = render(<App />);
    const inputName = getByTestId('input-name');
    expect(inputName).toHaveValue('');
    fireEvent.change(inputName, { target: { value: 'Icaro Ferreira' } })
    expect(inputName).toHaveValue('Icaro Ferreira')
  })

  it('Testing email field', () => {
    const { getByTestId } = render(<App />);
    const inputEmail = getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'icaro@teste.com' } })
    expect(inputEmail).toHaveValue('icaro@teste.com');
  })
})
