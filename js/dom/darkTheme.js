const d = document;
export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn);

    /* Obtenemos todos los nodos que tengan data-dark */
    const $selectors = d.querySelectorAll('[data-dark]');
    console.log($selectors);

    /* Almacenamos los emojis para lograr el cambio adecuado */
    let moon = '🌙';
    let sun = '☀️';

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            /* Verificamos si el contenido es Moon */
            if ($themeBtn.textContent === moon) {
                /* Recorremos los nodos y a cada uno le aplicamos la clase */
                $selectors.forEach((el) => el.classList.add(classDark));

                /* Cambiamos el emoji del boton */
                $themeBtn.textContent = sun;
            }else{
                /* Recorremos los nodos y a cada uno le retiramos la clase */
                $selectors.forEach((el) => el.classList.remove(classDark));

                /* Cambiamos el emoji del boton */
                $themeBtn.textContent = moon;
            }
        }
    });
}
