//* ESTRUCTURA QUE PINTA POR PANTALLA EN EL FOOTER EL NUMERO DE PERSONAJES TOTALES Y EL NÚMERO DE PERSONAJES QUE
//* QUEDAN VIVOS EN LA SERIE. SI POSTERIORMENTE SE AÑADIERAN DATOS A LA BBDD SE ACTUALIZARIA AUTOMATICAMENTE. 

'use strict'
import { responseCharacters } from "../api/callApiCharacters"

const resultCharacters= responseCharacters.then((characters) => createTemplateFooter(characters))
    
export const createTemplateFooter = (characters) => {
    let countAlive = 0;
    for (const character of characters){
        if (character.status === 'Vivo'){
            countAlive++;
        }
    }
    const pFooter$$ = document.querySelector('.footer__container_content');
    pFooter$$.textContent =  `El número de personajes actual es: ${characters.length}. El número de personajes vivos es ${countAlive}`;
}


