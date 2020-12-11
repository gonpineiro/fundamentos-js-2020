const d = document;
const w = window;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);

    /* Evento para mostrar u ocultar el boton */
    w.addEventListener('scroll', (e) => {
        /* Operador Cortocircuito para detectar uno u otro */
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        /* console.log(w.pageYOffset, d.documentElement.scrollTop); */

        if (scrollTop > 300) {
            /* Mostramos el boton */
            $scrollBtn.classList.remove('hidden');
        } else {
            /* Removemos el boton */
            $scrollBtn.classList.add('hidden');
        }
    });

    /* Evento para hacer funcionar el boton cuando se muestre */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: 'smooth',
                top: 0,
            });
        }
    });
}
