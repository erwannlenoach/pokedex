const search = () => {
  let input = document.getElementById('input-search').value 
  PageList(input)
}

window.search = search;

const PageList = (argument ) => {

    async function fetchPokemon(value) {

      fetch(`https://pokeapi.co/api/v2//pokemon/${value}`)
      .then((response) => response.json())
      .then((response) => { document.querySelector('#result').innerHTML = 
      `<div>
      <a>${response.name}</a>
      </div>`
    })
  }

  
  fetchPokemon(argument)
}

export { PageList }