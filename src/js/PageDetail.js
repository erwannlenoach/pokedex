

const PageDetail = (argument = " ") => {

    let slug = window.location.hash.substring(1).split("/")[1]
    console.log(slug)

    const fetchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2//pokemon/${slug}`,
        )
            .then((response) => response.json())
            .then((response) => {
                let { game_indices, name, sprites, stats, height, weight, types } = response;
                console.log(response), displayPokemon(game_indices, name, sprites['other']['official-artwork']['front_default'], height, weight)
                displayTypes(types), displayStats(stats)
            })
    }



    const displayPokemon = (game_indices, name, sprites, height, weight) => {

        let name_uppercase = name.charAt(0).toUpperCase() + name.slice(1)
        let adjustedWeight = weight / 10
        let adjustedHeight = height / 10

        pageContent.innerHTML =
            `<div class="card-detail" id=${game_indices[18].game_index}>
              
                <div class="container-detail">
                    <div id="id-detail">
                        <div id="picture-id">
                            <a href="#pagedetail/${name}"><img id="picture-pokemon-detail" src="${sprites}" ></a>
                            <div id="info-id">
                                <div id="name-index">
                                    <p id="name-pokemon-detail">${name_uppercase}</p>
                                    <p id="index-pokemon-detail">N°${game_indices[18].game_index} </p>
                                </div>
                                <div id="height-weight">
                                    <p id="height-pokemon-detail">Height : ${adjustedHeight} m</p>
                                    <p id="weight-pokemon-detail"> Weight : ${adjustedWeight} kg </p>
                                </div>
                                <div class="types">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="stats">
                    </div> 
                </div>
            <div>`
    }

    const displayTypes = (types) => {

        let pokemonTypes = document.querySelector(`.types`)

        pokemonTypes.innerHTML += types.map((type) => {
            return `<button class="typeButton">${type.type.name}</button>`
        }
        ).join("")

    }
    const displayStats = (stats) => {

        let pokemonStats = document.querySelector(`.stats`)
       
        pokemonStats.innerHTML += stats.map((stat) => {
            return `
            <p>${stat.stat.name}: ${stat.base_stat}  
            `
        }
        ).join("")

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
