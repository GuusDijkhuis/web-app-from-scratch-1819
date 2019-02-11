const main = document.querySelector('main')
const ul = document.querySelector('ul')

fetch('https://pokeapi.co/api/v2/pokemon/?limit=20').then(response => {
  return response.json();
}).then(response => {
  response.results.forEach(pokeNameData => {
    fetch(pokeNameData.url, {
      method: 'get'
    }).then(pokeAllData => {
      return pokeAllData.json()
    }).then(pokeAllData => {
      let allTypes = pokeAllData.types.map(type => {
        return `<span class="pokemon_type ` + type.type.name + `">` + type.type.name + `</span>`
      }).join(` `);

      ul.innerHTML +=
        `<a href="#pokemon/` + pokeNameData.name + `">
            <li>
              <img src="` + pokeAllData.sprites.front_default + `" alt="">
              <span class="pokemon_name">` + pokeNameData.name + `</span>` +
              allTypes +
            `</li>
        </a>`;
    })
  })
})

routie('pokemon/?:name', function(name) {
  console.log(name);
  ul.remove();

  main.innerHTML +=
    `<a href="#pokemon/` + pokeNameData.name + `">
        <div>
          <img src="` + pokeAllData.sprites.front_default + `" alt="">
          <span class="pokemon_name">` + pokeNameData.name + `</span>` +
          allTypes +
        `</div>
    </a>`;
});
