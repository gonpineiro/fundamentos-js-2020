import hamburgerMenu from './dom/menu-hamburguesa.js';

const d = document;

/* Evento del menu hamburguesa */
d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
});
