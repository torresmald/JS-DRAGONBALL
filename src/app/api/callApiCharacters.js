'use strict'
//* API QUE USAMOS PARA LA LLAMADA DE PETICIONES
//? https://dragon-ball-super-api.herokuapp.com/api
//? ENDPOINT: https://dragon-ball-super-api.herokuapp.com/api/characters

// export const responseCharacters = async () => {
//     const response = await fetch('');
//     const resultCharacters = await response.json();
// }
//  responseCharacters()

 
export const responseCharacters = fetch("https://dragon-ball-super-api.herokuapp.com/api/characters")
  .then((respuesta) => respuesta.json())
 




