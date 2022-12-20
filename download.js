import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'

fetch('https://finalspaceapi.com/api/v0/character')
  .then(response => response.json())
  .then(data => {
    fsPromises.writeFile('./characters.json', JSON.stringify(data))
  })
  .catch(error => console.error(error))



  fetch('https://finalspaceapi.com/api/v0/quote')
  .then(response => response.json())
  .then(data => {
    fsPromises.writeFile('./quotes.json', JSON.stringify(data))
  })
  .catch(error => console.error(error))


