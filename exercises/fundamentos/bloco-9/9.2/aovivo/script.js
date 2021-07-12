const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name}<br/> ${img.outerHTML}`;

  ul.appendChild(li);
}

const getPokemonPromise = (pokemon) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}${pokemon}`)
      .then((response) => response.json())
        .then((data) => {
          appendPokemon(data)
          resolve();
        })
  })
}

const fetchPokemonPromise = async() => {
  await getPokemonPromise('pikachu');
  await getPokemonPromise('squirtle');
  await getPokemonPromise('kakuna');
  await getPokemonPromise('rattata');
  // getPokemonPromise('pikachu')
  //   .then(() => getPokemonPromise('squirtle'))
  //   .then(() => getPokemonPromise('kakuna'))
  //   .then(() => getPokemonPromise('rattata'))
}

window.onload = fetchPokemonPromise();

// const getPokemon = (pokemon, callback) => {
//   fetch(`${API_URL}${pokemon}`)
//     .then((response) => response.json())
//     .then((data) => {
//       appendPokemon(data)
//       callback ? callback() : undefined;
//     })
// };

// const fetchPokemon = () => {
//   getPokemon('squirtle',
//     () => getPokemon('rattata',
//       () => getPokemon('pikachu',
//         () => getPokemon('kakuna'))));
// }