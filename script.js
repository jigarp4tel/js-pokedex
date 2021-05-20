const pokemonCardContainer = document.querySelector('.pokemon-card-wrapper');
const numberOfPokemon = 150;

const getPokemonData = async (id = "") => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)

    if (response.status == 404 || response.statusText == "Not Found") {
        console.log("Error:  resource not found");

        return
    }

    const pokemon = await response.json();

    createPokemonCard(pokemon);
}


function createPokemonCard(pokemon) {
console.log(pokemon.types[0].type.name)
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card')

    pokemonCard.innerHTML = 
   `
   <div class="pokemon-card_info">
            <img class="pokemon-card_img" id="update_img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" srcset="">
            <h2>${pokemon.name}</h2>
            <ul class="pokemon-card_genus">
                <li>${pokemon.types[0].type.name}</li>
            </ul>
        </div>
        <div class="pokemon-card_stats">
            <table>
                <tbody>
                    <tr>
                        <td>HP</td>
                        <td>${pokemon.stats[0].base_stat}</td>
                        <td><div></div></td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>${pokemon.stats[1].base_stat}</td>
                        <td><div></div></td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>${pokemon.stats[2].base_stat}</td>
                        <td><div></div></td>
                    </tr>
                    <tr>
                        <td>Special Attack</td>
                        <td>${pokemon.stats[3].base_stat}</td>
                        <td><div></div></td>
                    </tr>
                    <tr>
                        <td>Special Defense</td>
                        <td>${pokemon.stats[4].base_stat}</td>
                        <td><div></div></td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>${pokemon.stats[5].base_stat}</td>
                        <td><div></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
   `

   pokemonCardContainer.appendChild(pokemonCard)
}

const fetchPokemons = async () => {
    for(let i=1 ; i < 20; i++){
        await getPokemonData(i);
    }
}


fetchPokemons();