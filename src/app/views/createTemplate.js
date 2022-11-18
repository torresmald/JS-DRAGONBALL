//* ESTRUCTURA QUE PINTA EN PANTALLA LA LISTA DE PERSONAJES.
//* PARA CADA PERSONAJE DE LA LLAMADA  A LA API PINTAMOS UNA IMAGEN CON SU SRC Y UN NOMBRE. PREVIAMENTE LOS ORDENAMOS POR ID.
//* COMPROBAMOS POR ULTIMO SI EL PERSONAJE ESTÁ MUERTO Y A QUE ESPECIE CORRESPONDE PARA DARLE UNA CLASE Y APLICARLE ESTILOS.
//* CREAMOS UN EVENTLISTENER PARA CADA IMAGEN QUE LLAME A UNA FUNCION createTemplateModal QUE NOS HACE UN MODAL CON EL PERSONAJE SELECCIONADO. 

'use strict'
import { createTemplateModal } from "./createTemplateModal";
import { Character, DetailCharacter } from "../models/clases";

const div$$ = document.querySelector('.main__template');


export function createTemplate (characters)  {
    div$$.innerHTML = ''
    const main$$ = document.querySelector('.main');
    main$$.appendChild(div$$);
    characters.sort((a, b) => {
        return a.id - b.id
    })
    characters.forEach(character => {
        const myCharacter = new Character(character.name, character.imageUrl);
        const  myDetailCharacter = new DetailCharacter(character.name, character.imageUrl, character.id, character.role, character.specie, character.originplanet);

        const img$$ = document.createElement('img');
        img$$.classList.add('.modalImage')
        const name$$ = document.createElement('p');
        const characterCard$$ = document.createElement('div');
        characterCard$$.classList.add('main__template_card');
        characterCard$$.style.display = 'block';
        div$$.appendChild(characterCard$$);
        characterCard$$.appendChild(img$$);
        characterCard$$.appendChild(name$$);
        img$$.src = myCharacter.getCharactersImg();
        name$$.textContent = `Name: ${myCharacter.getCharactersName()}`;
        
        if (myDetailCharacter.getCharactersSpecie() === 'Angel'){
            characterCard$$.classList.add('angel');
        } else if (myDetailCharacter.getCharactersSpecie() === 'Saiyan'){
            characterCard$$.classList.add('saiyan');
        } else if (myDetailCharacter.getCharactersSpecie() === 'Ciborg'){
            characterCard$$.classList.add('ciborg');
        }
        if (myDetailCharacter.getCharactersSpecie() === 'Muerto'){
            characterCard$$.classList.add('dead');
        }
        const modal = img$$.addEventListener('click', () => createTemplateModal(character))
    });
}
