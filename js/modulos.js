import Saludar, { PI, usuario, saludar } from './constantes.js';
import { aritmetica } from './aritmetica.js';
console.log('Archivo Modulo.js');
console.log(PI);
console.log(usuario);

console.log(aritmetica.sumar(5, 7));
console.log(aritmetica.restar(10, 9));

saludar('Gonzalo');
new Saludar()
