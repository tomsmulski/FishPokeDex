
import { loadPokemon } from "./loadPoke.js";

function loadAllPokemons() {
  const pokeLink = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898';

  fetch(pokeLink)
    .then(response => response.json())
    .then(data => createList(data));
}

function createList(datas) {
  const element_main = document.querySelector('main');
  const element_div = document.createElement('div');
  element_div.classList.add('container');

  element_main.append(element_div);

  datas.results.forEach(data => {
    let pokemonUrl = data.url;
    let pokemonId = pokemonUrl.split('/');
    const element_img = document.createElement('img');
    const element_button = document.createElement('button');
    const element_p = document.createElement('p');
    element_button.classList.add('pokemon', 'max_wi');
    element_button.addEventListener('click', loadPokemon(pokemonId[6]));
    element_button.append(element_img);

    element_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId[6]}.png`;

    let stringBuilder = '(' +pokemonId[6] +') ' + data.name.charAt(0).toUpperCase() + data.name.slice(1);
    element_p.textContent = stringBuilder;
    element_button.append(element_p);
    element_div.append(element_button);
  });
}

export { loadAllPokemons };
