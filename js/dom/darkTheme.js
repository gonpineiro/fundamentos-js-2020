const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn);

    /* Obtenemos todos los nodos que tengan data-dark */
    const $selectors = d.querySelectorAll('[data-dark]');

    /* Almacenamos los emojis para lograr el cambio adecuado */
    let moon = '🌙';
    let sun = '☀️';

    const lightMode = () => {
        /* Recorremos los nodos y a cada uno le retiramos la clase */
        $selectors.forEach((el) => el.classList.remove(classDark));

        /* Cambiamos el emoji del boton */
        $themeBtn.textContent = moon;

        /* Alamacenamos light en el localStorage */
        ls.setItem('theme', 'light');
    };

    const darkMode = () => {
        /* Recorremos los nodos y a cada uno le aplicamos la clase */
        $selectors.forEach((el) => el.classList.add(classDark));

        /* Cambiamos el emoji del boton */
        $themeBtn.textContent = sun;

        /* Alamacenamos dark en el localStorage */
        ls.setItem('theme', 'dark');
    };

    /* Evento Click para el DarkTheme */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            /* Verificamos si el contenido es Moon */
            if ($themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    /* Evento que consulta el estado del LocalStorage */
    d.addEventListener('DOMContentLoaded', (e) => {
        /* Inicializamos el key theme en light en el localStorage */
        if (ls.getItem('theme') === null) ls.setItem('theme', 'light');

        /* Preguntamos que tiene el localStorage */
        if (ls.getItem('theme') === 'light') lightMode();
        if (ls.getItem('theme') === 'dark') darkMode();
    });
}
