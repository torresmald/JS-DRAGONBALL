'use strict'
import { responseCharacters } from "../api/callApiCharacters"

const resultCharacters = responseCharacters.then((characters) => createTemplateCounters(characters))

const angels$$ = document.getElementById('angels');
const saiyans$$ = document.getElementById('saiyans');
const cyborgs$$ = document.getElementById('cyborgs');
const deads$$ = document.getElementById('deads');

export const createTemplateCounters = (characters) => {
    let angels = 0;
    let saiyans = 0;
    let cyborgs = 0;
    let deads = 0;
    for(const character of characters){
        if (character.specie === 'Angel'){
            angels++; 
        }
        if (character.specie === 'Saiyan'){
            saiyans++;
        }
        if (character.specie === 'Ciborg'){
            cyborgs++;
        }
        if (character.status === 'Muerto'){
            deads++
        }
    }
    angels$$.textContent = `Nº DE ANGELES:  ${angels}`;
    saiyans$$.textContent = `Nº DE SAIYANS ${saiyans}`;
    cyborgs$$.textContent = `Nº DE CYBORGS ${cyborgs}`;
    deads$$.textContent = `Nº DE MUERTOS ${deads}`;
}