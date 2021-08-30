const search = () => {
  let input = document.getElementById('input-search').value 
  PageList(input)
}

window.search = search;

const PageList = (argument ) => {

    async function fetchPokemon(value) {

      fetch(`https://pokeapi.co/api/v2//pokemon/${value}`, 
      
      
      )
      .then((response) => response.json())
      .then((response) => { console.log(response), displayPokemon(response)
    })
  }


  const displayPokemon = (pokemon) => 
  {
    document.querySelector('#result').innerHTML = 
    `<div class="card">
      <div class="container">
        <img id="picture-pokemon" src="${pokemon.sprites.front_default}">
      </div>
      <div id="info-pokemon">
          <a>${pokemon.name}</a>
          <a>${pokemon.game_indices[18].game_index}</a>
      </div>
    </div>`

  }

  
  fetchPokemon(argument)
}

export { PageList }