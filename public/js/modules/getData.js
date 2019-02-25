import { cleanData } from './cleanData.js'
import { renderAllPokemon, renderDetailsPokemon, renderAllFromType } from './renderData.js'

let startCount = 0
let loadMoreButton = document.getElementById('load-more')

let allPokemonArr = []

export function getAllData(addCount = 0) {
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

export function getTeamData() {

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





function getMoreData() {
  getAllData(20)
}

loadMoreButton.addEventListener('click', getMoreData, false);
