const getById = async (id = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

(async () => {
    const pokemon = await getById();
    console.log(pokemon)
})()



