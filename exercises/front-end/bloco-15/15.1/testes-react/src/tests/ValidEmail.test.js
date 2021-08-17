import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

describe('Testing Email Validator', () => {
  it('Verify if email is valid', () => {
    const EMAIL_USER = 'icaro@test.com';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER }/>);
    const isValid = getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  })

  it('Verify if email is invalid', () => {
    const EMAIL_USER = 'icartest.com';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER }/>);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  })
})