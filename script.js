const getPokemonData = async query => {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`
    const response = await fetch(url)

    if(response.status == 404 || response.statusText == "Not Found"){
        console.log("Error:  resource not found");

        return
    }

    const pokemon = await response.json();
    

    document.getElementById('update_img').setAttribute('src',pokemon.sprites.other.dream_world.front_default);
}




const form = document.querySelector('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getPokemonData(search.value);
})