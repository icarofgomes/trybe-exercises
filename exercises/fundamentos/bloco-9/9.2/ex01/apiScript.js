// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const jokeContainer = document.querySelector('#jokeContainer');
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      jokeContainer.innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();
