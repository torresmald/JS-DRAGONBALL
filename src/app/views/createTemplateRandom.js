//* ESTRUCTURA QUE PINTA EN PANTALLA UN PERSONAJE ALEATORIO.
//* PARA EL PERSONAJE LLAMADO, PINTAMOS POR PANTALLA SU IMAGEN Y DATOS EXTRAS DE DICHO PERSONAJE. 
//* TAMBIEN LIMPIAMOS ANTES LO QUE HUBIERA PINTADO PARA PODER SUSTITURLO CON ESTA LINEA : div$$.innerHTML = '';
//* COMPROBAMOS POR ULTIMO SI EL PERSONAJE ESTÁ MUERTO Y A QUE ESPECIE CORRESPONDE PARA DARLE UNA CLASE Y APLICARLE ESTILOS. PREVIAMENTE LIMPIAMOS TODAS LAS CLASES.

'use strict'
import { responseCharacters } from "../api/callApiCharacters";

const div$$ = document.querySelector('.main__template');
const img$$ = document.createElement('img');
const name$$ = document.createElement('p');
const characterCard$$ = document.createElement('div');
const id$$ = document.createElement('p');
const originplanet$$ = document.createElement('p');
const role$$ = document.createElement('p');
const specie$$ = document.createElement('p');
const divText$$ = document.createElement('div')

export const createTemplateRandom = (characters) => {
    div$$.innerHTML = '';
    characterCard$$.innerHTML = '';
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const main$$ = document.querySelector('.main');

    div$$.style.justifyContent = 'center';
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

    img$$.src = randomCharacter.imageUrl;
    id$$.textContent = `ID: ${randomCharacter.id}`;
    name$$.textContent = `Name: ${randomCharacter.name}`;
    role$$.textContent = `Role: ${randomCharacter.role}`;
    originplanet$$.textContent = `Origin Planet: ${randomCharacter.originplanet}`;
    specie$$.textContent = `Specie: ${randomCharacter.specie}`;
    if (characterCard$$.classList.contains('saiyan') || characterCard$$.classList.contains('ciborg') ||
        characterCard$$.classList.contains('angel') || characterCard$$.classList.contains('dead')) {

        characterCard$$.classList.remove('angel');
        characterCard$$.classList.remove('ciborg');
        characterCard$$.classList.remove('saiyan');
        characterCard$$.classList.remove('dead');
    }
    if (randomCharacter.specie === 'Angel') {
        characterCard$$.classList.add('angel');
    } else if (randomCharacter.specie === 'Saiyan') {
        characterCard$$.classList.add('saiyan');
    } else if (randomCharacter.specie === 'Ciborg') {
        characterCard$$.classList.add('ciborg');
    }
    if (randomCharacter.status === 'Muerto') {
        characterCard$$.classList.add('dead');
    }
}
