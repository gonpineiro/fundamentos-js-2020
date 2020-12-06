import hamburgerMenu from './dom/menu-hamburguesa.js';
import { alarm, digitalClock } from './dom/reloj.js';
import { shortcuts, moveBall } from './dom/teclado.js';
import countDown from './dom/cuentaRegresiva.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    /* Evento del menu hamburguesa */
    hamburgerMenu('.panel-btn', '.panel', '.menu a');

    /* Evento del Reloj */
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');

    /* Evento Alarma */
    alarm('assets/alarm.mp3', '#activar-alarma', '#desactivar-alarma');

    /* Cuenta regresiva */
    countDown('countdown', "Jun 03, 2021 03:23:19", "Feliz cumpleaños");
});

/* keyup, keydown, keypress */
d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage")
});
