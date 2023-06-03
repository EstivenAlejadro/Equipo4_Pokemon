const Name = document.getElementById('Name');
const poke = document.getElementById('poke');
const level = document.getElementById('level');

const getById = async (id = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

(async () => {
    const pokemon = await getById();
    Name.textContent = pokemon.name;
    poke.src = pokemon.sprites.other["official-artwork"].front_shiny;
    level.textContent = `Power level:  ${pokemon.base_experience}`;
})()



