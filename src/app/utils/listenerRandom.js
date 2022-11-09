//* EVENT LISTENER QUE NOS PERMITE PULSAR EN LA IMAGEN PARA POSTERIORMENTE PINTAR EN PANTALLA UN PERSONAJE RANDOM.
//* ESTA ESTRUCTURA NECESITA EL JS QUE TRAE LA LLAMADA DE LA API Y EL JS QUE PINTA POR PANTALLA. 
'use strict'

import { createTemplateRandom} from "../views/createTemplateRandom";
import { responseCharacters } from "../api/callApiCharacters";

export const clickRandom = async () => {
    const imageListenerRandom$$ = document.querySelector('.characterListenerRandom');
    const listenerCharacters = imageListenerRandom$$.addEventListener('click',  () => {
        responseCharacters.then((characters) => createTemplateRandom(characters));
        })
}
