import hamburgerMenu from './dom/menu-hamburguesa.js';
import { alarm, digitalClock } from './dom/reloj.js';
import { shortcuts, moveBall } from './dom/teclado.js';
import countDown from './dom/cuentaRegresiva.js';
import botonScroll from './dom/botonScroll.js';
import darkTheme from './dom/darkTheme.js';
import responsiveMedia from './dom/responsiveObject.js';
import resposiveTester from './dom/responsiveTester.js';
import userDeviceInfo from './dom/deviceDetect.js';
import networkStatus from './dom/networkStatus.js';
import webcam from './dom/webcamDetection.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    /* Evento del menu hamburguesa */
    hamburgerMenu('.panel-btn', '.panel', '.menu a');

    /* Evento del Reloj */
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');

    /* Evento Alarma */
    alarm('assets/alarm.mp3', '#activar-alarma', '#desactivar-alarma');

    /* Cuenta regresiva */
    countDown('countdown', 'Jun 03, 2021 03:23:19', 'Feliz cumpleaños');

    /* Scroll Top Button */
    botonScroll('.scroll-top-btn');

    /* Responsive media */
    const videoYoutube = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RVtryqJBesk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    const linkVideo = `<a href="https://www.youtube.com/embed/RVtryqJBesk">Ver video</a>`;

    const map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198608.65230916327!2d-68.25548271972643!3d-38.940883839807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33ba35eb8e35%3A0x6220acb810e3e2f5!2zTmV1cXXDqW4!5e0!3m2!1ses!2sar!4v1607525577575!5m2!1ses!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    const linkMap = `<a href="https://goo.gl/maps/XJCi7xgk6ARUmsfy8">Ver mapa</a>`;

    responsiveMedia('youtube', '(min-width: 1024px)', linkVideo, videoYoutube);
    responsiveMedia('gmaps', '(min-width: 1024px)', linkMap, map);

    /* Responsive Tester */
    resposiveTester('responsive-tester');

    /* DeviceDetect */
    userDeviceInfo('user-device');

    /* WebCam detection */
    webcam('webcam');
});

/* DarkTheme */
darkTheme('.dark-theme-btn', 'dark-mode');

/* keyup, keydown, keypress */
d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
});

/* Network Status */
networkStatus();
