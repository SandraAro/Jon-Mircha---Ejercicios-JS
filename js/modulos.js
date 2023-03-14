//Que necesito importar, ruta donde se encuentra
import Saludar,{saludar,PI,password} from "./constantes.js";
import {aritmetica as calculos} from "./aritmeticas.js"
/* Nota: - A esas variables podemos cambiarle su nombre original y ponerle un alias con "as"
- fuera de los corchetes estan los export default, dentro los exporta */
console.log("Archivos modulos.js")
console.log(PI, password);
/* console.log(aritmetica.sumar(10,10));
console.log(aritmetica.restar(20,6)); */
console.log(calculos.sumar(5,10));
console.log(calculos.restar(20,6));

//Llamando una exportación por defecto
saludar();

let saludo = new Saludar();
saludo;