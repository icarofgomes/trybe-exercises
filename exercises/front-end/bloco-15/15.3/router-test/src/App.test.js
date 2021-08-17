import React from 'react';
import renderWithRouter from './renderWithRouter';
import { fireEvent } from '@testing-library/react';
import App, { About } from './App';
import { expect } from '@jest/globals';

describe('Testando o Router', () => {
  it('Renderizar o component App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página início/i);
    expect(home).toBeInTheDocument();
  });

  it('Renderizar o component Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página sobre/i);
    expect(aboutAll).toBeInTheDocument();
  });

  it('Renderizar uma "Página não encontrada"', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/pagina-que-nao-existe');
    const notFound = getByText(/Página não encontrada/);
    expect(notFound).toBeInTheDocument();
  });

  it('Deve renderizar e testar apenas o componente Sobre', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/);
    expect(aboutOnly).toBeInTheDocument();
  })
});
