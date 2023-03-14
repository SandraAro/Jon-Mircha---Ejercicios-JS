export const PI = Math.PI;

//como son expresiones y al momento no se sabe que me van almacenar
//al usar let y con como una export default me va a dar error.
let usuario = "sandra-aro";
usuario;
//para exportarla por defecto primero la declaro y luego la exporto

export let password = "Jesus";

//Exportación automatica o por defecto
export function saludar(){
    console.log("Hola soy Sandra");
}

//Función expresada, se guardan en una variable
const hello = ()=> console.log("Hola")

//Funcion definida
export default function saludar2(){
    console.log("Hola, yo saludando de nuevo")
}

/* Nota: Las unicas que permiten exportación en el momento que las
estas declarando son las funciones y las clases.
Las constantes y variables tienes que declarar primero y luego colocarle el 
export default */

export class Saludar{
    constructor(){
        console.log("Hola, soy el constructor de una función")
    }
}
