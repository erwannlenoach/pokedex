const search = () => {
  let input = document.getElementById('input-search').value
  
    // only display the pokemon with the corresponding name
  }

window.search = search;

const PageList = () => {

  async function fetchPokemons() {
    let j = 10

    for (let i = 1; i < j; i++) {
      fetch(`https://pokeapi.co/api/v2//pokemon/${i}`,
      )
        .then((response) => response.json())
        .then((response) => {
          let { game_indices, name, sprites} = response;
          console.log(response), displayPokemons(game_indices, name, sprites)
        })
    }
  }

 
  
  fetchPokemons()

  const displayPokemons = (game_indices, name, sprites) => {
    
    document.querySelector('#pageContent').innerHTML +=
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
}

PageList()

export { PageList }