const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 10; // 150
console.log(pokeContainer, pokemonCount);

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '#D5D5D4',
  fairy: '#FCEAFF',
  poison: '#98D7A5',
  bug: '#F8D5A3',
  dragon: '#97B3E6',
  psychic: '#EAEDA1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors)
console.log(mainTypes);

const fetchPokemon = async () => {
  for(let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const response = await fetch(url)
  const data = await response.json()
  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const pokeTypes = pokemon.types.map(type => type.type.name)
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1)
  const color = colors[type]
  pokemonEl.style.backgroundColor = color

  const pokemonInnerHtml = `
    <div class='image-container'>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
    </div>
    <div class='info'>
      <div class="info">
      <span class="number">#${pokemon.id}</span>
      <h3 class="name">${pokemon.name}</h3>
      <small class="type">Type <span>${type}</span></small>
    </div>
  `
  pokemonEl.innerHTML = pokemonInnerHtml
  pokeContainer.appendChild(pokemonEl)
}

fetchPokemon()