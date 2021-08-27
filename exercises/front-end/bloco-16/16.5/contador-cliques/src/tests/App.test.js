import React from 'react';
import { cleanup, screen, fireEvent } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from '../App';

describe('Testing Clicks', () => {
  beforeEach(cleanup);
  it('The page should has a button and a text with "10"', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const addBtn = screen.queryByText('Clique aqui!');

    expect(addBtn).toBeInTheDocument();
    expect(screen.queryByText('10')).toBeInTheDocument();

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    expect(screen.queryByText('12')).toBeInTheDocument();
  });
});
