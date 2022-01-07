import { writable } from 'svelte/store'

// console.log(document.location.hash, document.location.pathname)

let route = writable({
  hash: document.location.hash, 
  pathname: document.location.pathname
})

export { route }