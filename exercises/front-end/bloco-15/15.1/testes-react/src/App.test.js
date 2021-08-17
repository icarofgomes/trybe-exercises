import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testing a component that keeps the user e-mail:', () => {
  it('Verify if exists an Email field', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  // it('Verify if exists a Button', () =>{
  //   const { getByRole } = render(<App />);
  //   const inputButton = getByRole('button');
  //   expect(inputButton).toBeInTheDocument();
  // });
  
  it('Verify if exists two Buttons', () =>{
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);  
  });
  
  it('Verify if exists a send Button', () =>{
    const { getByTestId } = render(<App />);
    const inputButton = getByTestId('id-send');
    expect(inputButton).toBeInTheDocument();
    expect(inputButton).toHaveValue('Enviar');
  });

  it('Verify the correct behavior of component', () =>{
    const { getByTestId, getByLabelText } = render(<App />);

    const EMAIL_USER = 'icaro@teste.com';

    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER} });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`)
  })
});
