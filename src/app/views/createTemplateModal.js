//* ESTRUCTURA QUE PINTA EN PANTALLA EL MODAL CON EL PERSONAJE SELECCIONADO.
//* CREAMOS UN EVENTLISTENER EL CUAL CLICKANDO EN CUALQUIER SITIO NOS LIMPIE LA PANTALLA. 

'use strict'
import { responseCharacters } from "../api/callApiCharacters"
import { Character, DetailCharacter } from "../models/clases";


const divModal$$ = document.createElement('div');
divModal$$.classList.add('main__modal');


export function createTemplateModal(character) {

    const myDetailCharacter = new DetailCharacter(character.name, character.imageUrl, character.id, character.role, character.specie, character.originplanet);
    const main$$ = document.querySelector('.main');
    const divCharacter$$ = document.createElement('div');
    divCharacter$$.classList.add('main__modal_character');
    main$$.appendChild(divModal$$);
    divModal$$.appendChild(divCharacter$$);
    

    const img$$ = document.createElement('img');
    const name$$ = document.createElement('p');
    const id$$ = document.createElement('p');
    const originplanet$$ = document.createElement('p');
    const role$$ = document.createElement('p');
    const specie$$ = document.createElement('p');

    divCharacter$$.appendChild(img$$);
    divCharacter$$.appendChild(id$$);
    divCharacter$$.appendChild(name$$);
    divCharacter$$.appendChild(role$$);
    divCharacter$$.appendChild(originplanet$$);
    divCharacter$$.appendChild(specie$$);

    img$$.src = myDetailCharacter.getCharactersImg();
    name$$.textContent = `Name: ${myDetailCharacter.getCharactersName()}`;
    id$$.textContent = `ID: ${myDetailCharacter.getCharactersId()}`;
    name$$.textContent = `Name: ${myDetailCharacter.getCharactersName()}`;
    role$$.textContent = `Role: ${myDetailCharacter.getCharactersRole()}`;
    originplanet$$.textContent = `Origin Planet: ${myDetailCharacter.getCharactersOrigin()}`;
    specie$$.textContent = `Specie: ${myDetailCharacter.getCharactersSpecie()}`;

    divModal$$.addEventListener('click', () => {
        divModal$$.innerHTML = '';
        divModal$$.remove();
    })
}