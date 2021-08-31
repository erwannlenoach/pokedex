const PageDetail = (argument = " ") => {

    let slug = window.location.hash.substring(1).split("/")[1]
    console.log(slug)

    const fetchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2//pokemon/${slug}`,
        )
            .then((response) => response.json())
            .then((response) => {
                let { game_indices, name, sprites, stats, height, weight, types } = response;
                console.log(response), displayPokemon(game_indices, name, sprites, stats, height, weight, types)
            })
    }



    const displayPokemon = (game_indices, name, sprites, stats, height, weight, types) => {

        document.querySelector('#pageContent').innerHTML =
            `<div class="card" id=${game_indices[18].game_index}>
            <div class="container">
            <a href="#pagedetail/${name}"><img id="picture-pokemon" src="${sprites.front_default}" ></a>
            </div>
            <div id="info-pokemon">
              <a class="index-pokemon">${game_indices[18].game_index} </a>
              <a  class="name-pokemon">${name}</a>
            </div>
        </div>`

    }


    const render = () => {
        pageContent.innerHTML =
            `<div class="card" id="pokemon-detail">
        <p>Waiting<p>
        </div>
        `
        fetchPokemon()
    }
    render()
}



export { PageDetail }

