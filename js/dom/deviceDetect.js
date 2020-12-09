const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id);

    /* Detectamos si es un Movil */
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipodd/i),
        windows: () => ua.match(/windows phone/i),

        /* No la guardamos en una arrow porque el contexto de this seria window */
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    };

    /* Detectamos si es Desktop */
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),

        /* No la guardamos en una arrow porque el contexto de this seria window */
        any: function () {
            return this.linux() || this.mac() || this.windows();
        },
    };

    /* Detectamos el navegador */
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),

        /* No la guardamos en una arrow porque el contexto de this seria window */
        any: function () {
            return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
        },
    };

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegaddor: <b>${isBrowser.any()}</b></li>
        </ul>
    `;

    /* Contenido exclusivo */
    if (isBrowser.chrome()) $id.innerHTML += `<p><mark>Este contenido solo se ve en chrome</mark></p>`;
    if (isBrowser.firefox()) $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</mark></p>`;
    if (isBrowser.edge()) $id.innerHTML += `<p><mark>Este contenido solo se ve en edge</mark></p>`;

    /* Redirecciones */
    /* if (isMobile.android()) window.location.href = 'https://www.google.com.ar'; */
}
