import { cleanData } from './cleanData.js'
import { renderData } from './renderData.js'

export function getData() {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=800')
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
      // console.log(pokemon);
      return cleanData(pokemon)
    })
  })
  .then(res => {
    renderData(res)
  })
}
