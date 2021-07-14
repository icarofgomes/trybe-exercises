const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name}<br/> ${img.outerHTML}`;

  ul.appendChild(li);
}

const fetchPokemon = () => {
  fetch(`${API_URL}squirtle`)
    .then((response) => {
      response.json()
        .then((data) => {
          appendPokemon(data)
        })
    })
        fetch(`${API_URL}kakuna`)
          .then((response) => {
            response.json()
              .then((data) => {
                appendPokemon(data)
              })
          })
              fetch(`${API_URL}rattata`)
                .then((response) => {
                  response.json()
                    .then((data) => {
                      appendPokemon(data)
                    })
                })
                    fetch(`${API_URL}pikachu`)
                      .then((response) => {
                        response.json()
                          .then((data) => {
                            appendPokemon(data)
                          })
                      })
}

window.onload = fetchPokemon();