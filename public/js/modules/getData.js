import { cleanData } from './cleanData.js'
import { addLoadingState, removeLoadingState } from './states.js'
import { renderAllPokemon, renderDetailsPokemon, renderAllFromType, renderTeam } from './renderData.js'

let startCount = 0
let loadMoreButton = document.getElementById('load-more')

let allPokemonArr = []

export function getAllData(addCount = 20) {
  let renderCount = startCount += addCount;

  return fetch('https://pokeapi.co/api/v2/pokemon?offset=' + renderCount)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res.results.map(res => {
      return res.url
    })
  })
  .then(res => {
    addLoadingState()
    return Promise.all(res.map(url => {
      let promise = new Promise((resolve, reject) => {
        fetch(url)
        .then(pokemon => {
          resolve(pokemon.json())
        }).catch(err => {
          reject(err)
        })
      })
      return promise
    }))
  })
  .then(res => {
    return res.map(pokemon => {
      allPokemonArr.push(cleanData(pokemon))
      return cleanData(pokemon)
    })
  })
  .then(res => {
    localStorage.setItem('allPokemon', JSON.stringify(res))
    removeLoadingState()
    renderAllPokemon(res)
  })
}

export function getSingleData(name) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + name)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return cleanData(res)
  })
  .then(res => {
    renderDetailsPokemon(res)
  })
}

export function getAllTypes(type) {
  let arrByType = allPokemonArr.filter(filterByType);
  function filterByType(res) {
    if(res.typeNames.includes(type)) {
      return res
    }
  }
  renderAllFromType(arrByType)
}

export function getLocalTeamData() {

  let teamArr = JSON.parse(localStorage.getItem('team'));
  // console.log(teamArr);

  if(teamArr == null) {
  } else {
    teamArr.forEach(res => {
      fetch('https://pokeapi.co/api/v2/pokemon/' + res)
      .then(res => {
        return res.json();
      })
      .then(res => {
        return cleanData(res)
      })
      .then(res => {
        console.log(res);
        renderTeam(res)
      })
    })
  }




}


function getMoreData() {
  getAllData(20)
}

loadMoreButton.addEventListener('click', getMoreData, false);
