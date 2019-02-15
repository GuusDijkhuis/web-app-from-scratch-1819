export function renderAllPokemon(res) {
  let ul = document.querySelector('ul')

  res.forEach(pokemon => {
      let pokemonDetails = `
      <a href="#` + pokemon.name + `">
          <li class="all-pokemons">
            <img src="` + pokemon.sprites.back_default + `" alt="">
            <span class="pokemon-name">` + pokemon.name + `</span>` +
            pokemon.types +
          `</li>
      </a>`
      ul.insertAdjacentHTML('beforeend', pokemonDetails)
  })
}

export function renderDetailsPokemon(res) {
  let main = document.querySelector('main')
  console.log(res);
  let pokemonDetail = `
  <div class="pokemon-details">
    <div class="img-slider">
      <img src=${res.sprites.back_default} />
    </div>
    <div class="pokemon-info">
      <span class="pokemon-name">${res.name}</span>
      <div class="pokemon-types">${res.types}</div>
      <div class="pokemon-stat-name">${res.stats}</div>
    </div>
  </div>`

  main.innerHTML = pokemonDetail
}

// <img src=${res.sprites.front_default} />
