export function addLoadingState() {
  let loader = document.querySelector('#loader-div')
  loader.classList.remove('hide-load')
  loader.classList.add('show-load')
}
export function removeLoadingState() {
  let loader = document.querySelector('#loader-div')
  loader.classList.remove('show-load')
  loader.classList.add('hide-load')
}
