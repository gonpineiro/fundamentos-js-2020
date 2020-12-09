const d = document;

export default function resposiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    /* Evento para abrir una URL */
    d.addEventListener('submit', (e) => {
        if (e.target === $form) {
            e.preventDefault();
            tester = window.open($form.direccion.value, 'tester', `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    });
    
    /* Evento para cerrar una URL */
    d.addEventListener('click', (e) => {
        if (e.target === $form.cerrar) tester.close();
    });
}
