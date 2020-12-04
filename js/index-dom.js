import hamburgerMenu from './dom/menu-hamburguesa.js';
import {alarm, digitalClock} from './dom/reloj.js'

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    /* Evento del menu hamburguesa */
    hamburgerMenu('.panel-btn', '.panel', '.menu a');

    /* Evento del Reloj */
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
});

