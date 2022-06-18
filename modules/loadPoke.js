function loadPokemon(pokeID) {
  const ele_div = document.createElement('div');

  const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`;

  fetch(pokeUrl)
    .then(response => response.json())
    .then(data => createInfoPage(data));
}

function createInfoPage(data) {
  const pokeName = data.name;
  const pokeWeight = data.weight;
  const pokeHeight = data.height;
  const pokeTypes = data.types; //array

  let pkttypes = '';

  pokeTypes.forEach(pokeTyp => {
    pkttypes += pokeTyp.type.name + ', ';
  });

  //alert(pokeName + "\n" + pokeWeight + "\n" + pokeHeight + "\n" + pokeTypes[1].type.name);
  alert(pokeName + '\n' + pokeWeight + '\n' + pokeHeight + '\n' + pkttypes);
}
