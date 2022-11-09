//* ESTRUCTURA QUE PINTA EN PANTALLA EL PERSONAJE FILTRADO
//* PARA EL PERSONAJE FILTRADO, PINTAMOS POR PANTALLA SU IMAGEN Y DATOS EXTRAS DE DICHO PERSONAJE. 
//* TAMBIEN LIMPIAMOS ANTES LO QUE HUBIERA PINTADO PARA PODER SUSTITURLO CON ESTA LINEA : div$$.innerHTML = '';
//* COMPROBAMOS POR ULTIMO SI EL PERSONAJE ESTÁ MUERTO Y A QUE ESPECIE CORRESPONDE PARA DARLE UNA CLASE Y APLICARLE ESTILOS.

'use strict'

import { clickSearch } from "../utils/listenerSearch";

const div$$ = document.querySelector('.main__template')
const input$$ = document.querySelector('input');
const search$$ = document.querySelector('.main__selection_search');


export const createTemplateSearch = (characters) => {
    div$$.innerHTML = '';
    const filtered = characters.filter((character) => {
        return character.name.toLowerCase().includes(input$$.value);
    })
    for (let character of filtered) {  
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
        main$$.appendChild(div$$);
        div$$.appendChild(characterCard$$);
        characterCard$$.appendChild(img$$);
        characterCard$$.appendChild(divText$$);

        
        divText$$.appendChild(id$$);
        divText$$.appendChild(name$$);
        divText$$.appendChild(role$$);
        divText$$.appendChild(originplanet$$);
        divText$$.appendChild(specie$$);

        img$$.src = character.imageUrl;
        id$$.textContent = `ID: ${character.id}`;
        name$$.textContent = `Name: ${character.name}`;
        role$$.textContent = `Role: ${character.role}`;
        originplanet$$.textContent = `Origin Planet: ${character.originplanet}`;
        specie$$.textContent = `Specie: ${character.specie}`;
        if (character.specie === 'Angel'){
            characterCard$$.classList.add('angel');
        } else if (character.specie === 'Saiyan'){
            characterCard$$.classList.add('saiyan');
        } else if (character.specie === 'Ciborg'){
            characterCard$$.classList.add('ciborg');
        }
        if (character.status === 'Muerto'){
            characterCard$$.classList.add('dead');
        }
    }
}








