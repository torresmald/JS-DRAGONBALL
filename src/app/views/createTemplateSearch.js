//* ESTRUCTURA QUE PINTA EN PANTALLA EL PERSONAJE FILTRADO
//* PARA EL PERSONAJE FILTRADO, PINTAMOS POR PANTALLA SU IMAGEN Y DATOS EXTRAS DE DICHO PERSONAJE.
//* SI EL PERSONAJE NO EXISTE MOSTRAMOS UN ERROR.  
//* TAMBIEN LIMPIAMOS ANTES LO QUE HUBIERA PINTADO PARA PODER SUSTITURLO CON ESTA LINEA : div$$.innerHTML = '';
//* COMPROBAMOS POR ULTIMO SI EL PERSONAJE ESTÁ MUERTO Y A QUE ESPECIE CORRESPONDE PARA DARLE UNA CLASE Y APLICARLE ESTILOS.

'use strict'

import { clickSearch } from "../utils/listenerSearch";
import { Character, DetailCharacter, Error } from '../models/clases';
import { createTemplateModal } from "./createTemplateModal";
// import { showError } from "../utils/handleError";
import { resetPage } from "../utils/reset";

const div$$ = document.querySelector('.main__template')
const input$$ = document.querySelector('input');
const search$$ = document.querySelector('.main__selection_search');


export const createTemplateSearch = (characters) => {
    characters.sort((a, b) => {
        return a.id - b.id
    })
    div$$.innerHTML = '';
    const filtered = characters.filter((character) => {
        return character.name.toLowerCase().includes(input$$.value)
        
    })
    if (filtered.length === 0){
        Error.showError();
        resetPage();
    } else {
        filtered.forEach(character => {
            const myDetailCharacter = new DetailCharacter(character.name, character.imageUrl, character.id, character.role, character.specie, character.origin, character.status);
            const img$$ = document.createElement('img');
            const name$$ = document.createElement('p');
            const characterCard$$ = document.createElement('div');
            const id$$ = document.createElement('p');
            const originplanet$$ = document.createElement('p');
            const role$$ = document.createElement('p');
            const specie$$ = document.createElement('p');
            const divText$$ = document.createElement('div')
    
            const main$$ = document.querySelector('.main');
            characterCard$$.classList.add('main__template_card');
            divText$$.classList.add('divText');
            main$$.appendChild(div$$);
            div$$.appendChild(characterCard$$);
            characterCard$$.appendChild(img$$);
            characterCard$$.appendChild(divText$$);
    
    
            divText$$.appendChild(id$$);
            divText$$.appendChild(name$$);
            divText$$.appendChild(role$$);
            divText$$.appendChild(originplanet$$);
            divText$$.appendChild(specie$$);
    
            img$$.src = myDetailCharacter.getCharactersImg();
            id$$.textContent = `ID: ${myDetailCharacter.getCharactersId()}`;
            name$$.textContent = `Name: ${myDetailCharacter.getCharactersName()}`;
            role$$.textContent = `Role: ${myDetailCharacter.getCharactersRole()}`;
            originplanet$$.textContent = `Origin Planet: ${myDetailCharacter.getCharactersOrigin()}`;
            specie$$.textContent = `Specie: ${myDetailCharacter.getCharactersSpecie()}`;
            if (myDetailCharacter.getCharactersSpecie() === 'Angel') {
                characterCard$$.classList.add('angel');
            } else if (myDetailCharacter.getCharactersSpecie() === 'Saiyan') {
                characterCard$$.classList.add('saiyan');
            } else if (myDetailCharacter.getCharactersSpecie() === 'Ciborg') {
                characterCard$$.classList.add('ciborg');
            }
            if (myDetailCharacter.getCharactersStatus() === 'Muerto') {
                characterCard$$.classList.add('dead');
            }
            const modal = img$$.addEventListener('click', () => createTemplateModal(character))
        });
    }
    
}








