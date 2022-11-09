//* ESTRUCTURA QUE PINTA EN PANTALLA LA LISTA DE PERSONAJES.
//* PARA CADA PERSONAJE DE LA LLAMADA  A LA API PINTAMOS UNA IMAGEN CON SU SRC Y UN NOMBRE. 
//* COMPROBAMOS POR ULTIMO SI EL PERSONAJE ESTÁ MUERTO Y A QUE ESPECIE CORRESPONDE PARA DARLE UNA CLASE Y APLICARLE ESTILOS.
//* CREAMOS UN EVENTLISTENER PARA CADA IMAGEN QUE LLAME A UNA FUNCION createTemplateModal QUE NOS HACE UN MODAL CON EL PERSONAJE SELECCIONADO. 

'use strict'
import { createTemplateModal } from "./createTemplateModal";

const div$$ = document.querySelector('.main__template');


function createTemplate (characters)  {
    div$$.innerHTML = ''
    const main$$ = document.querySelector('.main');
    main$$.appendChild(div$$);
    
    for (const character of characters) {
        const img$$ = document.createElement('img');
        img$$.classList.add('.modalImage')
        const name$$ = document.createElement('p');
        const characterCard$$ = document.createElement('div');
        characterCard$$.classList.add('main__template_card');
        characterCard$$.style.display = 'block'
        div$$.appendChild(characterCard$$);
        characterCard$$.appendChild(img$$);
        characterCard$$.appendChild(name$$);
        img$$.src = character.imageUrl;
        name$$.textContent = `Name: ${character.name}`;
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
        const modal = img$$.addEventListener('click', () => createTemplateModal(character))
    }
}
export {createTemplate};