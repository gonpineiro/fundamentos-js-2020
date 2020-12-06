const d = document;

export default function countDown(id, limiteDate, finalMessage) {
    const $countDown = d.getElementById(id);

    /* Obtenemos la fecha en milisegundos */
    const countDawnDate = new Date(limiteDate).getTime();

    let countDownTempo = setInterval(() => {
        let now = new Date().getTime();
        let limiteTime = countDawnDate - now;

        /* Obtenemos los dias  */
        let days = Math.floor(limiteTime / (1000 * 60 * 60 * 24));

        /* Lo sobrante de los dias lo pasamos a horas */
        let hours = '0' + Math.floor((limiteTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        /* Recortamos las horas para que solo aparezca el cero cuando haya 1 digito */
        hours = hours.slice(-2);

        /* Lo sobrante de las horas lo pasamos a minutos */
        let minutes = '0' + Math.floor((limiteTime % (1000 * 60 * 60)) / (1000 * 60));

        /* Recortamos los minutos para que solo aparezca el cero cuando haya 1 digito */
        minutes = minutes.slice(-2);

        /* Lo sobrante de los minutos lo pasamos a segundos */
        let seconds = '0' + Math.floor((limiteTime % (1000 * 60)) / 1000);
        seconds = seconds.slice(-2);

        $countDown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;

        /* imprimimos el mensage cuando se cumpla el tiempo */
        if (limiteTime < 0) {
            clearInterval(countDownTempo);
            $countDown.innerHTML = `<h3>${finalMessage} </h3>`;
        }
    }, 1000);
}
