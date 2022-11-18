//* EVENT LISTENER QUE NOS PERMITE PULSAR EN LA IMAGEN DE LA NUBE KINTON PARA POSTERIORMENTE PINTAR EN PANTALLA.
//* ESTA ESTRUCTURA NECESITA EL JS QUE TRAE LA LLAMADA DE LA API Y EL JS QUE PINTA POR PANTALLA. 
//* SI NO FILTRAMOS POR NOMBRE, PINTARÁ A TODOS LOS PERSONAJES ORDENADOS POR ID. 
'use strict'
import { createTemplateSearch } from "../views/createTemplateSearch";
import { responseCharacters } from "../api/callApiCharacters";




export const clickSearch = async () => {
    const button$$ = document.querySelector('button');
    const listenerCharacters = button$$.addEventListener('click',  () => {
        responseCharacters.then((characters) => createTemplateSearch(characters))
        })
}
