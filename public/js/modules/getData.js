import { cleanData } from './cleanData.js'
import { renderAllPokemon, renderDetailsPokemon } from './renderData.js'

export function getAllData() {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=400')
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
      localStorage.setItem(pokemon.name, pokemon)
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
