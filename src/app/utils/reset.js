//* RECOGEMOS DEL HTML EL BOTON QUE HARÁ LAS FUNCIONES DE RESET Y CREAMOS UNA FUNCION QUE NOS LIMPIE EL TEMPLATE DONDE SE PINTARÁN LOS PERSONAJES. 
//* TAMBIEN NOS LIMPIA EL INPUT PARA PODER VOLVER A ESCRIBIR.

'use strict'

const button$$ = document.getElementById('reset');
const div$$ = document.querySelector('.main__template');
const input = document.querySelector('input');

export const resetPage = () => {
    div$$.innerHTML = '';
    input.value = '';
}
const listenerReset = button$$.addEventListener('click', resetPage);

