const pokemon = Object.freeze([    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },      { "id": 5, "name": "Charmeleon", "types": ["fire"] },      { "id": 9, "name": "Blastoise", "types": ["water"] },      { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },      { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },      { "id": 23, "name": "Ekans", "types": ["poison"] },      { "id": 24, "name": "Arbok", "types": ["poison"] },      { "id": 25, "name": "Pikachu", "types": ["electric"] },      { "id": 37, "name": "Vulpix", "types": ["fire"] },      { "id": 52, "name": "Meowth", "types": ["normal"] },      { "id": 63, "name": "Abra", "types": ["psychic"] },      { "id": 67, "name": "Machamp", "types": ["fighting"] },      { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },      { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },      { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },      { "id": 98, "name": "Krabby", "types": ["water"] },      { "id": 115, "name": "Kangaskhan", "types": ["normal"] },      { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },      { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },      { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

const pokeByThree = pokemon.filter(pokemon => pokemon.id % 3 === 0);
console.log(pokeByThree)

const fireTypePoke = pokemon.filter(pokemon => pokemon.types.includes("fire"))
console.log(fireTypePoke)

const moreThanOneType = pokemon.filter(pokemon => pokemon.types.length > 1)
console.log(moreThanOneType)

// const pokemonNames = pokemon.filter(function(poke) { return poke.name.valueOf });
// const pokemonNames = pokemon.filter(pokemon.name);
const pokemonName = pokemon.map(({ name }) => ({ name }));
const pokemonNames = pokemon.map(pokemon => ({ name: pokemon.name }));
const pokemonNamesss = pokemon.map(value => value.name);
console.log(pokemonNames);
console.log(pokemonNamesss);
// console.log(...pokemon)

const idOver99 = pokemon.filter(pokemon => pokemon.id > 99).map(value => value.name);
console.log(idOver99)

const poisonTypePokeNames = pokemon.filter(pokemon => pokemon.types.length == 1 && pokemon.types[0] == "poison").map(value => value.name);
console.log(poisonTypePokeNames)

const typePlusFlying = pokemon.filter(pokemon => pokemon.types.length == 2 && pokemon.types[1] == "flying").map(value => value.types[0]);
console.log(typePlusFlying)

const normalCount = pokemon.filter(pokemon => pokemon.types.includes("normal")).length
console.log(`${normalCount} normal type pokemon`)