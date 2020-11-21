{
    let texto = 'Soy Gonzalo Piñeiro, hello my name is Gonzalo';
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
}

console.log('------Elementos del DOM------');
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.html);
console.log(document.documentElement);
console.log(document.charset);
console.log(document.title);
console.log('links', document.links);
console.log('images', document.images);
console.log('forms', document.forms);
console.log('styleSheets', document.styleSheets);
console.log('scripts', document.scripts);
document.getSelection().toString();
/* document.write('<h2>Hola Mundo</h2>'); */

console.log('------Nodos, elementos, y selectores------');
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'));
console.log(document.getElementById('menu'));

console.log('querySelector: Solamente trae el primero tipo encontrado');
console.log(document.querySelector('.card'));
console.log(document.querySelector('#menu'));
console.log(document.querySelector('a'));
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('a').length);
document.querySelectorAll('a').forEach((item) => console.log(item));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelectorAll('#menu li'));

console.log('------Atributos y Data Attribute------');
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.link-dom').href);
console.log(document.querySelector('.link-dom').getAttribute('href'));

document.documentElement.lang = 'en';
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang', 'ex-MX');
console.log(document.documentElement.lang);

const $linkDom = document.querySelector('.link-dom');
$linkDom.setAttribute('target', '_blank');
console.log($linkDom.hasAttribute('rel'));
$linkDom.setAttribute('rel', 'noopener');
$linkDom.setAttribute('href', 'https://www.google.com.ar');
console.log($linkDom.hasAttribute('rel'));
$linkDom.removeAttribute('rel');
console.log($linkDom.hasAttribute('rel'));

/* Data-attribute */
console.log($linkDom.getAttribute('data-description'));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
$linkDom.setAttribute('data-description', 'Modelo de Objeto del Documento');
console.log($linkDom.dataset.description);
$linkDom.dataset.description = 'Mi nuevo canal';
console.log($linkDom.dataset.description);
console.log($linkDom.hasAttribute('data-id'));

console.log('------Estilos variables CSS------');
console.log($linkDom.style);
console.log($linkDom.style.cssText);
console.log($linkDom.getAttribute('style'));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
console.log(getComputedStyle($linkDom));
console.log(getComputedStyle($linkDom).color);

/* Estilizando */
$linkDom.style.setProperty('text-decoration', 'none');
$linkDom.style.setProperty('display', 'block');
$linkDom.style.width = '50%';
$linkDom.style.textAlign = 'center';
$linkDom.style.marginLeft = 'auto';
$linkDom.style.marginRight = 'auto';
$linkDom.style.padding = '1rem';
$linkDom.style.borderRadius = '.5rem';

console.log($linkDom.style);
console.log($linkDom.getAttribute('style'));
console.log(getComputedStyle($linkDom));

/* Custom Properties CSS */
const $html = document.documentElement;
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
console.log(varDarkColor);
let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');
console.log(varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty('--dark-color', '#000');
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
console.log(varDarkColor);
$body.style.setProperty('background-color', varDarkColor);

console.log('------DOM: Clases CSS------');
const $card = document.querySelector('.card');
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains('rotate-45'));
$card.classList.add('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.remove('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
$card.classList.replace('rotate-45', 'rotate-135');
$card.classList.add('opacity-80', 'sepia');
$card.classList.remove('opacity-80', 'sepia');
$card.classList.toggle('opacity-80', 'sepia');
$card.classList.remove('opacity-80', 'sepia');
$card.classList.remove('rotate-45', 'rotate-135');

console.log('------DOM: Texto y HTML------');
const $whatIsDom = document.getElementById('que-es');
let text = `
<p>
    El modelo de objeto de documento uno (<b><i>Es una API </i> </b>)
</p>
<p>
    El modelo de objeto de documento Dos
</p>
<p>
    El modelo de objeto de documento Tres
</p>
`;

/* No forma parte del estandar */
$whatIsDom.innerText = text;

/* No interpreta las etiquetas HTML */
$whatIsDom.textContent = text;

/* Reemplaza el contenido, y va inserta contenido HTML */
$whatIsDom.innerHTML = text;

/* Reemplaza el elemento del DOM por un contenido */
$whatIsDom.outerHTML = text;

console.log('------DOM: Traversing: Recorriendo HTML------');
const $cards = document.querySelector('.cards');
console.log($cards);

/* Lista de nodos */
console.log('childNodes', $cards.childNodes);

/* Acceder a los hijos */
console.log('children', $cards.children);
console.log('children[2]', $cards.children[2]);

/* Primer y ultimo hijo */
console.log('firstElementChild', $cards.firstElementChild);
console.log('lastElementChild', $cards.lastElementChild);

/* Acceder al padre */
console.log('parentElement', $cards.parentElement);
console.log('parentNode', $cards.parentNode);

/* Hermano anterio y posterior */
console.log('previousElementSibling', $card.previousElementSibling);
console.log('nextElementSibling', $card.nextElementSibling);

/* Busca el padre mas cercado al tipo del selector dado  */
console.log('closest("div")', $cards.closest('div'));
console.log('closest("body")', $cards.closest('body'));
console.log('closest("section")', $cards.children[3].closest('section'));

console.log('------DOM: Creando elementos y fragmentos------');

/* Crea elementos HTML */
const $figure = document.createElement('figure');
const $img = document.createElement('img');
const $figcaption = document.createElement('figcaption');

/* Crea un nodo de Texto */
const $figcaptionText = document.createTextNode('Animals');

/* Capturamos el elemento padre donde insertamos la tarjeta */
$newCards = document.querySelector('.cards');

/* Configuramos los Elementos */
$img.setAttribute('src', 'https://placeimg.com/200/200/animals');
$img.setAttribute('alt', 'Animals');
$figure.classList.add('card');

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);

/* Insertamos la Figure en Cards */
$newCards.appendChild($figure);

/* Otra manera de hacer no tal optima */
const $figureTwo = document.createElement('figure');
$figureTwo.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption> People </figcaption>
`;
$figureTwo.classList.add('card');
$newCards.appendChild($figureTwo);

/* Tercer manera */
const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
const $ul = document.createElement('ul');
document.write('<h3>Estaciones del año</h3>');
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement('li');
    $li.textContent = el;
    $ul.appendChild($li);
});

/* Cuarta manera */
const continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];
const $ul2 = document.createElement('ul');
document.write('<h3>Continentes del mundo</h3>');
document.body.appendChild($ul2);
$ul2.innerHTML = '';
continentes.forEach((el) => {
    $ul2.innerHTML += `<li>${el}</li>`;
});

/* Cuarta manera */
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'];

$ul3 = document.createElement('ul');
$fragment = document.createDocumentFragment();
meses.forEach((el) => {
    const $li = document.createElement('li');
    $li.textContent = el;
    $fragment.appendChild($li);
});
document.write('<h3>Meses del año</h3>');
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

console.log('------DOM: Templetaes Elements------');

$cardThree = document.querySelector('.cards');

/* Obtenemos el contenido de la etiqueta Template */
$template = document.getElementById('template-card').content;

$fragment = document.createDocumentFragment();
const cardContent = [
    {
        title: 'Tecnologia',
        img: 'https://placeimg.com/200/200/tech',
    },
    {
        title: 'Animales',
        img: 'https://placeimg.com/200/200/animals',
    },
    {
        title: 'Arquetectura',
        img: 'https://placeimg.com/200/200/arch',
    },
    {
        title: 'Gente',
        img: 'https://placeimg.com/200/200/people',
    },
    {
        title: 'Naturaleza',
        img: 'https://placeimg.com/200/200/nature',
    },
];

cardContent.forEach((el) => {
    $template.querySelector('img').setAttribute('src', el.img);
    $template.querySelector('img').setAttribute('alt', el.title);
    $template.querySelector('figcaption').textContent = el.title;

    /* Clonamos el nodo Template:
    True: copia todoa la estrcutra
    False: copia la etiqueta */
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cardThree.appendChild($fragment);

console.log('------DOM: Modificando elementos (Old)------');

const $cardsTwo = document.querySelector('.cards');
const $newCard = document.createElement('figure');

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption> Any </figcaption>
`;

$newCard.classList.add('card');

/* Reemplazamos el Tercer elemento de card */
$cardsTwo.replaceChild($newCard, $cardsTwo.children[2]);

/* Insertamos antes de un nodo, del primero elemento */
$cardsTwo.insertBefore($newCard, $cardsTwo.firstElementChild);

/* Eliminar elemento */
$cardsTwo.removeChild($cardsTwo.lastElementChild);

/* Clonamos todo el conido de Cards */
$cloneCards = $cardsTwo.cloneNode(true);

/* Insertamos el card clonado al final del body */
document.body.appendChild($cloneCards);

console.log('------DOM: Modificando elementos (New)------');

/* 
insertAdjacent:
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)

Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguente)
*/

const $cardsThree = document.querySelector('.cards');

const $newCardTwo = document.createElement('figure');
$newCardTwo.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption> insertAdjacent </figcaption>
`;

$newCardTwo.classList.add('card');

/* insertAdjacentElement */

/* Como hermano anterior  */
$cardsThree.insertAdjacentElement('beforebegin', $newCardTwo);

/* Como primero hijo */
$cardsThree.insertAdjacentElement('afterbegin', $newCardTwo);

/* Como ultimo hijo */
$cardsThree.insertAdjacentElement('beforeend', $newCardTwo);

/* Como hermano siguente */
$cardsThree.insertAdjacentElement('afterend', $newCardTwo);

/* Lo dejamos Seteado de esta maneras, las funciones se pisan */
$cardsThree.insertAdjacentElement('afterbegin', $newCardTwo);

/* insertAdjacentText */
let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>  </figcaption>
`;

const $newCardThree = document.createElement('figure');

$newCardThree.insertAdjacentHTML('beforeend', $contentCard);
$newCardThree.querySelector('figcaption').insertAdjacentText('afterbegin', 'Nuevo Texto');
// $cardsThree.insertAdjacentElement('afterbegin', $newCardThree);

/* Como prinmero hijo */
$cardsThree.prepend($newCardThree);

/* Como hermano anterior */
$cardsThree.before($newCardThree);

/* Como ultimo hijo */
$cardsThree.append($newCardThree);

/* Como hermano posterior */
$cardsThree.after($newCardThree);

console.log('------DOM: Manejo de eventos------');

/* Evento con atributo HTML */
function holaMundo() {
    console.log('HolaMundo');
    console.log(event);
}

/* Evento con manejador Semántico */
function eventoSemantico(e) {
    console.log('HolaMundo');
    console.log(e);
}

const $eventoSemantico = document.getElementById('evento-semantico');

$eventoSemantico.onclick = eventoSemantico;

/* Pisa la funcion anterior */
$eventoSemantico.onclick = function (e) {
    console.log('HolaMundo manejador de eventos semánticos');
    console.log(e);
};

/* Evento manejador multiple */
const $eventoMultiple = document.getElementById('evento-multiple');

$eventoMultiple.addEventListener('click', holaMundo);

$eventoMultiple.addEventListener('click', (e) => {
    console.log('evento manejador multiple');
    console.log('e.type', e.type);
    console.log('e.target', e.target);
});

console.log('------DOM: Eventos como paraemtros  y Remover Eventos------');

function saludar(name = 'Desconocid@') {
    console.log(`Hola ${name} - ${event}`);
}
$eventoMultiple.addEventListener('click', saludar);

/* De esta manera podemos pasar los parameotros */
$eventoMultiple.addEventListener('click', () => {
    saludar();
    saludar('Gonzalo');
});

/* Removiendo eventos */
$eventoRemover = document.getElementById('evento-remover');

/* Generar funcion para remover el evento */
const removeDobleClick = (e) => {
    console.log(`Removiendo el evento de tipo ${e.type}`);
    $eventoRemover.removeEventListener('dblclick', removeDobleClick);
    console.log(e);
    $eventoRemover.disabled = true;
};

/* Agregando evento DobleClick */
$eventoRemover.addEventListener('dblclick', removeDobleClick);

console.log('------DOM: Flujo de eventos------');

/* Capturamos todos los Divs dentro de eventos-flujo*/
const $divsEventos = document.querySelectorAll('.eventos-flujo div');
console.log($divsEventos);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

    /* Elimina la propagacion */
    /* e.stopPropagation(); */
}

/* Propagacion de los eventos */
$divsEventos.forEach((div) => {
    /* Fase de burbuja - Interno a externo */
    div.addEventListener('click', flujoEventos, false);
    div.addEventListener('click', flujoEventos, {
        capture: false,
    });

    /* Fase de captura - Externo a interno*/
    div.addEventListener('click', flujoEventos, true);
    div.addEventListener('click', flujoEventos, {
        capture: true,
        /* Solo permite ejecutar el evento una sola vez */
        once: true,
    });
    div.addEventListener('click', flujoEventos, {
        capture: false,
        once: false,
    });
});

console.log('------DOM: Stop Propagation & PreventDefault------');

const $linkEventos = document.querySelector('.eventos-flujo a');
$linkEventos.addEventListener('click', (e) => {
    console.log('Hola Link Evento');

    /* Elimina el evento por defecto, en este caso es el Link */
    e.preventDefault();

    /* Elimina la propagacion */
    // e.stopPropagation();
});

console.log('------DOM: Delegacion de eventos------');

/* Genero un evento Click a todo el Documento */
document.addEventListener('click', (e) => {
    console.log('click en:', e.target);

    /* Si hago click sobre un div dentro de .eventos-flujo */
    if (e.target.matches('.eventos-flujo div')) {
        console.log('Desde .eventos-flujo div');
    }

    /* Si hago click sobre un a dentro de .eventos-flujo */
    if (e.target.matches('.eventos-flujo a')) {
        console.log('Desde .eventos-flujo a');
    }
});

console.log('------BOM: Propiedades y eventos------');

/* Evento que se aplica cuando se altera la ventana */
window.addEventListener('resize', (e) => {
    console.log('Evento Resize');
    /* Tamaño del ancho del ViewPort */
    console.log('innerWidth', window.innerWidth);

    /* Tamaño del largo del ViewPort */
    console.log('innerHeight', window.innerHeight);

    /* Tamaño del ancho de la ventana */
    console.log('outerWidth', window.outerWidth);

    /* Tamaño del largo de la ventana */
    console.log('outerHeight', window.outerHeight);
    console.log(e);
});

/* Evento que se aplica cuando se raeliza un scroll */
window.addEventListener('scroll', (e) => {
    console.log('Evento scroll');

    /* Cuando se aleja del margen TOP */
    console.log('scrollX', window.scrollX);

    /* Cuando se aleja del margen LEFT */
    console.log('scrollY', window.scrollY);
});

/* Distancia de X (LEFT-TOP) */
console.log('screenX', window.screenX);

/* Distancia de Y (LEFT-TOP) */
console.log('screenY', window.screenY);

/* Evento que se aplica cuando la ventana haya cargado totalmente */
/* window.addEventListener('load', (e) => {
    console.log('Evento load');
    console.log(e);
    console.log('screenX', window.screenX);
    console.log('screenY', window.screenY);
}); */

/* Igual que Load pero mas Optimo */
/* document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Evento DOMContentLoaded');
    console.log(e);
    console.log('screenX', window.screenX);
    console.log('screenY', window.screenY);
}); */

console.log('------BOM: Métodos------');

/* Obtenemos los botones de Ventana */
const $btnAbrir = document.getElementById('abrir-ventana');
const $btnCerrar = document.getElementById('cerrar-ventana');
const $btnImprimir = document.getElementById('imprimir-ventana');

let ventana;

$btnAbrir.addEventListener('click', (e) => {
    /* Abrimos una ventana y guardamos la referencia */
    ventana = open('https://www.google.com.ar');
});
$btnCerrar.addEventListener('click', (e) => {
    /* Cerramos la ventana de la referencia */
    ventana.close();
});
$btnImprimir.addEventListener('click', (e) => {
    window.print();
});

console.log('------BOM: Objetos: URL, Historial y Navegador------');

/* Objeto Location */
console.log(location);
console.log('origin:', location.origin);
console.log('protocol:', location.protocol);
console.log('host:', location.host);
console.log('hostname:', location.hostname);
console.log('port:', location.port);
console.log('href:', location.href);
console.log('hash:', location.hash);
console.log('search:', location.search);
console.log('pathname:', location.pathname);

/* Recarga la pagina */
/* location.reload() */

/* Objeto History */
console.log('history', history);
console.log('history.length', history.length);

/* Ir hacia atras */
/* history.back(3)*/

/* ir hacia adelante */
/* history.forward(3) */

/* Objeto Navigator */
console.log(navigator);
console.log('connection', navigator.connection);
console.log('geolocation', navigator.geolocation);
console.log('mediaDevices', navigator.mediaDevices);
console.log('mimeTypes', navigator.mimeTypes);
console.log('onLine', navigator.onLine);
console.log('serviceWorker', navigator.serviceWorker);
console.log('storage', navigator.storage);
console.log('usb', navigator.usb);
console.log('userAgent', navigator.userAgent);
