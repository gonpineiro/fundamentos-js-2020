const d = document;
const n = navigator;

export default function webcam(id) {
    const $video = d.getElementById(id);
    /* console.log(n.mediaDevices.getUserMedia); */

    /* Comprobamos si la funcion existe */
    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                console.log(stream);
                $video.srcObject = stream;
                $video.onplay();
            })
            .catch((err) => {
                $video.insertAdjacentHTML('afterend', `<p><mark>${err}</mark></p>`);
                console.log('error', err);
            });
    }
}
