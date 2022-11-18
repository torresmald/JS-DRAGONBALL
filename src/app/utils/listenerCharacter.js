//* EVENT LISTENER QUE NOS PERMITE PULSAR EN LA IMAGEN PARA POSTERIORMENTE PINTAR EN PANTALLA.
//* ESTA ESTRUCTURA NECESITA EL JS QUE TRAE LA LLAMADA DE LA API Y EL JS QUE PINTA POR PANTALLA. 

'use strict'

import { createTemplate} from "../views/createTemplate";
import { responseCharacters } from "../api/callApiCharacters";


export const clickImage = async () => {
    const imageListener$$ = document.querySelector('.characterListener');
    const listenerCharacters = imageListener$$.addEventListener('click',  () => {
        responseCharacters.then((array) => createTemplate(array));
        })
}
