import password, {PI, saludar} from "./constante.js";
import {aritmetica} from "./aritmetica.js"

// console.log('Archivos modulos.js');
console.log(`El valor de PI es : ${PI}`);
let a = 4, b = 5, c = 7;
console.log(`La suma de ${a} + ${b} es : ${aritmetica.sumar(a,b)}`);
console.log(`La resta de ${a} - ${c} es : ${aritmetica.restar(a,c)}`);
saludar();
console.log(`El password es: ${password}`);