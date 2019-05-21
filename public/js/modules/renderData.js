import { showTeam3s } from './team.js'
import { getLocalTeamData } from './getData.js'

let loadMoreBtn = document.querySelector('#load-more')


export function renderAllPokemon(res) {
  let ul = document.querySelector('ul');
  let main = document.querySelector('main')
  let child = document.querySelector('#pokemon-details')
  
  if(child) {
    main.removeChild(child);
  } else {
    console.log(false)
  }

  loadMoreBtn.style.display = 'block';


  res.forEach(pokemon => {
    let pokemonDetails =
    `<li class="all-pokemons">
        <img class="add-to-team" id="${pokemon.name}" src="./public/img/add-to-team.svg"/>
        <a href="#${pokemon.name}">
          <img src="${pokemon.sprites.front_default}" alt="">
          <span class="pokemon-name">${pokemon.name}</span>` +
          pokemon.types +
        `</a>
      </li>`;
    ul.insertAdjacentHTML('beforeend', pokemonDetails);
  });

  let pokemonAddArr = document.querySelectorAll('.add-to-team')

  let teamArr = []
  pokemonAddArr.forEach(res => {
    res.addEventListener('click', function(e) {
      showTeam3s()
      teamArr.push(e.target.id)
      localStorage.setItem(`team`, JSON.stringify(teamArr));
      getLocalTeamData()

    })
  })

}

export function renderDetailsPokemon(res) {
  let ul = document.querySelector('ul')
  let main = document.querySelector('main')

  loadMoreBtn.style.display = 'none';
  
  while (ul.hasChildNodes()) {
      ul.removeChild(ul.lastChild);
  }

  let pokemonDetail = `
  <div id="pokemon-details">
    <div class="img-slider">
    <img src=${res.sprites.front_shiny_default} />
    </div>
    <div class="pokemon-info">
      <span class="pokemon-name">${res.name}</span>
      <div class="pokemon-types">${res.types}</div>
      <div class="pokemon-all-stats">${res.stats}</div>
    </div>
  </div>`


  main.insertAdjacentHTML('afterbegin', pokemonDetail)
}

export function renderAllFromType(res) {
  let ul = document.querySelector('ul');
  let main = document.querySelector('main')
  let child = document.querySelector('#pokemon-details')
  
  if(child) {
    main.removeChild(child);
  } else {
    console.log(false)
  }

  while (ul.hasChildNodes()) {
    ul.innerHTML = "";
  }

  loadMoreBtn.style.display = 'block';


  res.forEach(pokemon => {
    let pokemonDetails =
    `<li class="all-pokemons">
        <img class="add-to-team" id="${pokemon.name}" src="./public/img/add-to-team.svg"/>
        <a href="#${pokemon.name}">
          <img src="${pokemon.sprites.front_default}" alt="">
          <span class="pokemon-name">${pokemon.name}</span>` +
          pokemon.types +
        `</a>
      </li>`;
    ul.insertAdjacentHTML('beforeend', pokemonDetails);
  });

  let pokemonAddArr = document.querySelectorAll('.add-to-team')

  let teamArr = []
  pokemonAddArr.forEach(res => {
    res.addEventListener('click', function(e) {
      showTeam3s()
      teamArr.push(e.target.id)
      localStorage.setItem(`team`, JSON.stringify(teamArr));
      getLocalTeamData()

    })
  })
}

export function renderTeam(res) {
  let teamMembers = document.querySelector('.my-team');

  let pokemonDetails = `
  <div class="my-team-members">
    <img src="${res.sprites.front_default}" alt="">
    <span class="pokemon-name">${res.name}</span>` +
    res.types +
  `</div>`;

  teamMembers.insertAdjacentHTML('beforeend', pokemonDetails);

}
