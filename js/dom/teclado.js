const d = document;

export function shortcuts(e) {
    /* console.log('type:', e.type);
    console.log('key:', e.key);
    console.log('keyCode:', e.keyCode);
    console.log('altKey:', e.altKey);
    console.log('ctrlKey:', e.ctrlKey);
    console.log('shiftKey:', e.shiftKey);
    console.log(e); */

    /* Genera un evento cuando presionamos ctrt + a */
    if (e.key === 'a' && e.altKey) {
        console.log('Control + a');
    }
}

let x = 0;
let y = 0;
export function moveBall(e, ball, stage) {
    /* Obtenemos la pelota */
    const $ball = d.querySelector(ball);

    /* Obtenemos el escenario */
    const $stage = d.querySelector(stage);

    /* Obtenemos los limites de la pelota */
    const limitsBall = $ball.getBoundingClientRect();

    /* Obtenemos los limites del escenario */
    const limitsStage = $stage.getBoundingClientRect();

    console.log(limitsBall);
    console.log(limitsStage);
    switch (e.keyCode) {
        /* Izquierda */
        case 37:
            e.preventDefault();
            if (limitsBall.left > limitsStage.left) x--;
            break;

        /* Arriba */
        case 38:
            e.preventDefault();
            if (limitsBall.top > limitsStage.top) y--;
            break;

        /* Derecha */
        case 39:
            e.preventDefault();
            if (limitsBall.right < limitsStage.right) x++;
            break;

        /* Abajo */
        case 40:
            e.preventDefault();
            if (limitsBall.bottom < limitsStage.bottom) y++;
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
