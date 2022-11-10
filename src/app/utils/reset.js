//* RECOGEMOS DEL HTML EL BOTON QUE HARÁ LAS FUNCIONES DE RESET Y CREAMOS UNA FUNCION QUE NOS LIMPIE EL TEMPLATE DONDE SE PINTARÁN LOS PERSONAJES. 
'use strict'

const button$$ = document.getElementById('reset');
const div$$ = document.querySelector('.main__template');

export const resetPage = () => {
    div$$.innerHTML = '';
}
const listenerReset = button$$.addEventListener('click', resetPage);

