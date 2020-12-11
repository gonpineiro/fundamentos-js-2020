const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll('section[data-scroll-spy]');

    /* entries: todos los elementos que se ven en el vp */
    const cb = (entries) => {
        /* entry: elemento que se esta observando */
        entries.forEach((entry) => {
            /* Obtenemos el atributo ID que origina el evento */
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(cb, {
        /* Determinamos los margenes que toma en cuenta para el observer */
        /* rootMargin: '-400px 0px -400px 0px', */

        /* Especificamos el limite: entre el 50% y 75% */
        threshold: [0.5, 0.75],
    });

    /* A cada elemento le asignamos el observador */
    $sections.forEach((el) => observer.observe(el));
}
