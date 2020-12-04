export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;
    d.addEventListener('click', (e) => {
        /* Tango el boton como su hijos */
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            /* Activamos el Menu */
            d.querySelector(panel).classList.toggle('is-active');
            /* Animacion del boton Menu */
            d.querySelector(panelBtn).classList.toggle('is-active');
        }

        if (e.target.matches(menuLink)) {
            /* Desactivamos el Menu */
            d.querySelector(panel).classList.remove('is-active');
            /* Animacion del boton Menu */
            d.querySelector(panelBtn).classList.remove('is-active');
        }
    });
}
