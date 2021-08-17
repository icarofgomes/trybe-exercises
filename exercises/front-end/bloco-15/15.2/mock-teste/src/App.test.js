import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

describe('Testing the JokeApp', () => {
  it('fetch joke', async() =>{
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    }

    global.fetch = jest.fn(async() => ({
      json: async () => joke
    }))

    const { findByText } = render(<App />);
    await findByText('Whiteboards ... are remarkable.');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://icanhazdadjoke.com/',
      {"headers": {"Accept": "application/json"}}
    )
  })
})
