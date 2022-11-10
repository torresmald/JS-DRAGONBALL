//* 1 .- IMPORTAMOS EL FICHERO DE ESTILOS QUE CONTIENE TODAS LAS IMPORTACIONES A CADA UNO DE LOS FICHEROS
//*      DE HEADER, MAIN, FOOTER, VARS, ETC.
//* 2 .- IMPORTAMOS LOS EVENTLISTENER Y EJECUTAMOS LAS FUNCIONES QUE LOS CONTIENEN. 
//* 3 .- IMPORTAMOS LA PLANTILLA QUE PINTA EN PANTALLA EL FOOTER. 
//* 4 .- UTILIZAMOS BEM Y 2 VARIABLES PARA EL COLOR DE TEXTOS Y EL TIPO DE FUENTE. 

'use strict'
import './styles/styles.scss';
import 'bootstrap';


import { createTemplateFooter } from './views/createTemplateFooter';
import {clickImage} from './utils/listenerCharacter';
import {clickRandom} from './utils/listenerRandom';
import {clickSearch} from './utils/listenerSearch';
import {scrollFunction} from './utils/backToTopButton';
import {resetPage} from './utils/reset';




clickImage();
clickRandom();
clickSearch();
scrollFunction();







