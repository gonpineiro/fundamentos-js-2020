const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    /* Obtenemos la Media Query */
    let breakPoint = w.matchMedia(mq);

    const responsive = (e) => {
        /* Cuando se cumpla la mq devuelve un true */
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
    };

    breakPoint.addListener(responsive);
    responsive(breakPoint);
}
