export function renderAllPokemon(res) {
  let ul = document.querySelector('ul')
  res.forEach(pokemon => {
      let pokemonDetails = `
      <li class="all-pokemons">
        <img class="add-to-team" id="${pokemon.name}" src="./public/img/add-to-team.svg"/>
        <a href="#${pokemon.name}">
          <img src="${pokemon.sprites.front_default}" alt="">
          <span class="pokemon-name">${pokemon.name}</span>` +
          pokemon.types +
        `</a>
      </li>`
      ul.insertAdjacentHTML('beforeend', pokemonDetails)
  })
  let pokemonAddArr = document.querySelectorAll('.add-to-team')

  let teamArr = []
  pokemonAddArr.forEach(res => {
    res.addEventListener('click', function(e) {
      teamArr.push(e.target.id)
      localStorage.setItem(`team`, JSON.stringify(teamArr));
    })
  })
}

export function renderDetailsPokemon(res) {
  let main = document.querySelector('main')
  let pokemonDetail = `
  <div class="pokemon-details">
    <div class="img-slider">
    <img src=${res.sprites.front_shiny_default} />
    </div>
    <div class="pokemon-info">
      <span class="pokemon-name">${res.name}</span>
      <div class="pokemon-types">${res.types}</div>
      <div class="pokemon-all-stats">${res.stats}</div>
    </div>
  </div>`

  main.innerHTML = pokemonDetail
}

export function renderAllFromType(res) {
  let ul = document.querySelector('ul')

  ul.innerHTML = "";

  res.forEach(pokemon => {
    console.log(pokemon);
      let pokemonDetails = `
      <li class="all-pokemons">
        <img class="add-to-team" id="${pokemon.name}" src="./public/img/add-to-team.svg"/>
        <a href="#${pokemon.name}">
          <img src="${pokemon.sprites.front_default}" alt="">
          <span class="pokemon-name">${pokemon.name}</span>` +
          pokemon.types +
        `</a>
      </li>`
      ul.insertAdjacentHTML('beforeend', pokemonDetails)
  })
  let pokemonAddArr = document.querySelectorAll('.add-to-team')

  let teamArr = []
  pokemonAddArr.forEach(res => {
    res.addEventListener('click', function(e) {
      teamArr.push(e.target.id)
      localStorage.setItem(`team`, JSON.stringify(teamArr));
    })
  })
}
