
let ul = document.querySelector('ul')

export function renderData(data) {

  data.forEach(pokemon => {

      let pokemonDetails = `
      <a href="#pokemon/` + pokemon.name + `">
          <li>
            <img src="` + pokemon.back_default + `" alt="">
            <span class="pokemon_name">` + pokemon.name + `</span>` +
            pokemon.types +
          `</li>
      </a>`

      ul.insertAdjacentHTML('beforeend', pokemonDetails)



  })


}
