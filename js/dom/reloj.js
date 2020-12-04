const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    /* Almacenamiento del Interval */
    let clockTempo;

    d.addEventListener('click', (e) => {
        /* Cuando le damos Play */
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            /* Desactivamos el boton */
            e.target.disabled = true;
        }

        /* Cuando le damos Stop */
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}

export function alarm(sound, btnPlay, btnStop) {
    /* Almacenamiento del Timeout */
    let alarmTempo;

    /* Generamos una etiqueta Audio */
    const $alarm = d.createElement('audio');
    $alarm.src = sound;

    d.addEventListener('click', (e) => {
        /* Caudno le damos Play */
        if (e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);

            /* Desactivamos el boton */
            e.target.disabled = true;
        }

        /* Cuando le damos Stop */
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo);
            
            /* Pausamos el sonido */
            $alarm.pause();

            /* Volvemos al inciio */
            $alarm.currentTime = 0
            d.querySelector(btnPlay).disabled = false;
        }
    });
}
