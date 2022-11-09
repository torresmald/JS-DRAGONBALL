//* ESTRUCTURA QUE PINTA EN PANTALLA EL MODAL CON EL PERSONAJE SELECCIONADO EN 
//* CREAMOS UN EVENTLISTENER PARA CLICKANDO EN CUALQUIER SITIO NOS LIMPIE LA PANTALLA. 

'use strict'
import { responseCharacters } from "../api/callApiCharacters"



const divModal$$ = document.createElement('div');
divModal$$.classList.add('main__modal');

export function createTemplateModal(character) {

    const main$$ = document.querySelector('.main');
    main$$.appendChild(divModal$$);

    const img$$ = document.createElement('img');
    const name$$ = document.createElement('p');
    const id$$ = document.createElement('p');
    const originplanet$$ = document.createElement('p');
    const role$$ = document.createElement('p');
    const specie$$ = document.createElement('p');

    divModal$$.appendChild(img$$);  
    divModal$$.appendChild(id$$);
    divModal$$.appendChild(name$$);
    divModal$$.appendChild(role$$);
    divModal$$.appendChild(originplanet$$);
    divModal$$.appendChild(specie$$);

    img$$.src = character.imageUrl;
    name$$.textContent = `Name: ${character.name}`;
    id$$.textContent = `ID: ${character.id}`;
    name$$.textContent = `Name: ${character.name}`;
    role$$.textContent = `Role: ${character.role}`;
    originplanet$$.textContent = `Origin Planet: ${character.originplanet}`;
    specie$$.textContent = `Specie: ${character.specie}`;

    divModal$$.addEventListener('click', () => {
        divModal$$.innerHTML = '';
        divModal$$.remove();
    })
}