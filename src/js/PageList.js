const axios = require('axios').default;

const search = () => {
  let input = document.getElementById('input-search').value

  // only display the pokemon with the corresponding name
}

window.search = search;

const PageList = () => {

  document.querySelector('#pageContent').innerHTML = ""

  const fetchPokemons = async () => {

    let j = 152

    for (let i = 1; i < j; i++) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2//pokemon/${i}`);
        console.log(response.data)
        setTimeout(displayPokemons(response.data.game_indices, response.data.name, response.data.sprites['other']['official-artwork']['front_default'], response.data.types), 1000)
      }
      catch (error) {
        // handle error
        console.log(error);
      }

    }
  }



  fetchPokemons()

  const displayPokemons = (game_indices, name, sprites, type) => {
    let name_uppercase = name.charAt(0).toUpperCase() + name.slice(1)

    document.querySelector('#pageContent').innerHTML +=
      `
        <div class="card" id=${game_indices[18].game_index}>
          <div class="container">
            <a href="#pagedetail/${name}"><img id="picture-pokemon" src="${sprites}" ></a>
          </div>
          <div id="info-pokemon">
            <p id="name-pokemon">${name_uppercase}</p>
            <p id="index-pokemon">N°${game_indices[18].game_index}</p>
          </div>
        </div>
      `
  }


  const enterClick = () => {
    document.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        inputSearch()
      }
    })

  }

  const inputSearch = () => {
    let inputValue = document.getElementById("input-search").value
    search(inputValue)
  }
  const search = async (input) => {

        try {
          const response = await axios.get(`https://pokeapi.co/api/v2//pokemon/${input}`);
          console.log(response.data)
         

          
          setTimeout(displayPokemons(response.data.game_indices, response.data.name, response.data.sprites['other']['official-artwork']['front_default'], response.data.types), 1000)
        }
        catch (error) {
          // handle error
          console.log(error);
        }
  
      
    }

  
  

enterClick()
}


PageList()

export { PageList }