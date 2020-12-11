const d = document;

export default function searchFilter(input, selector) {
    d.addEventListener('keyup', (e) => {
        if (e.target.matches(input)) {
            /* Limpia el input con la tecla Esc */
            if (e.key === 'Escape') e.target.value = '';

            d.querySelectorAll(selector).forEach((el) => {
                /* verificamos si el valor del input esta includo en el contenido de algun selector */
                const bool = el.textContent.toLowerCase().includes(e.target.value);
                bool ? el.classList.remove('filter') : el.classList.add('filter');
            });
        }
    });
}
