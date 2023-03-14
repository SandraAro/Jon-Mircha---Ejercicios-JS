/* 1) Programa una función que cuente el 
numero de caracteres de una cadena de 
texto, pe.miFuncion("Hola Mundo").
Devolverá 10 */

//Función tradidicional o declarada
/* function contarCaracteres(cadena=""){
    if(!cadena){
        console.log("No ingresaste ninguna cadena");
    } else{
        console.log(`La cadena ${cadena} tiene ${(cadena.length)} caracteres`)
    }
}
contarCaracteres();
contarCaracteres("Hola Sandra"); */

//Arrow Function o función expresada
/* const caracteres= (cadena="") => 
(!cadena) 
? console.log("No ingresaste ninguna cadena")
: console.log(`La cadena ${cadena} tiene ${(cadena.length)} caracteres`);
caracteres();
caracteres("Hola Sandra"); */

/* 2) Programa una función que te devuelva el texto
recortado según el número de caracteres indicados.
pe.miFuncion("Hola Mundo"), devolverá "Hola" */
/* const recortar = (cadena="", long = undefined) =>
(!cadena)
 ? console.warn("No ingresastes la cadena")
 :(long === undefined)
   ? console.info("No ingresastes la longitud de la cadena")
   : console.info(cadena.slice(0, long));

 recortar("Hola Sandra",12);
 */
/* 3) Programa una función que dada una String te
devuelva un Array de textos separados por cierto
caracter, pe.miFuncion("hola que tal"), devolvera:
['hola', 'que', 'tal'] */
/* const convertirAArreglo = (cadena = "", separador = undefined) =>
(!cadena)
 ? console.info("No ingresaste la cadena")
 : (separador===undefined)
   ? console.info("No ingresaste el caracter separador")
   : console.log(cadena.split(separador)) 

convertirAArreglo("Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre", ","); */

/* Programe una función que repita un texto X veces, pe.miFuncion("Hola Mundo"),
devolvera Hola Mundo Hola Mundo Hola Mundo */
/* const repetirTexto=(cadena="", veces=undefined)=>{
    if(!cadena) console.warn("No ingresaste una cadena");

    if(veces===undefined) console.warn("No ingresaste las cantidad de Veces a repetir");

    if(veces===0) console.error("El numero de veces no puede ser Cero");

    if(Math.sign(veces)===-1) return console.error("El número de veces no puede ser negativo");

    for(let i=1; i <= veces; i++) console.info(`${cadena},${i}`)
}

repetirTexto("Cristo Vive", 0); */

/* 5) Programa una función que invierta las palabras de una cadena
de texto, pe.miFuncion("Hola"), devolvera "aloH" */
/* const invertirPalabras= (cadena="")=>
(!cadena)
? console.warn("No has introducido una cadena")
: console.info(cadena.split("").reverse().join(""))

invertirPalabras("Hola Sandra"); */

/* 6) Programa una función para contar el número de veces
que se repite una palabra en un texto largo, pe.miFuncion("hola mundo
Adios mundo") devolverá 2 */

/* const contarPalabras= (cadena="", texto="")=>{
if (!cadena) return console.warn("No intruduciste la cadena a contar");
if (!texto) return console.warn("No intruduciste un texto a buscar");
let cont=0;
    for(let i=0; i!==-1;){
      i=cadena.indexOf(texto, i)
      if(i!==-1) 
      i++ 
    cont++;
    }
    return console.log(`La cadena ${cadena} repite el ${texto} ${cont} veces`)
}
contarPalabras("Hola hola", "hola"); */

/* 7) Programa una función que valide si una palabra o frase dada, es un
palindrome(que se lee igual en un sentido que en otro), pe.miFuncion("Salas")
devolvera true */
const cadenaPalindrome= (cadena="")=>{
if(!cadena) console.warn("No has introducido una cadena")
   cadena=cadena.toLowerCase();
  let inversa= cadena.split("").reverse().join("");
if(cadena === inversa)
  return console.info(`La cadena ${cadena} es Palindrome`)
}

/* cadenaPalindrome("reconoCEr"); */

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.miFuncion
("xyz1,xyz2,xyz3,xyz4,xyz5,xyz") devolverá "1,2,3,4,5" */
const eliminarPatron = (cadena = "", eliminar="")=>{
if(!cadena) return console.warn("No introduciste una cadena de texto");

if(!eliminar) return console.warn("No introduciste un texto a eliminar");
    //Con new RegExp evalua una expresión regular,le dice que busque en toda la cadena sin distinguir entre mayusculas o minusculas
    return console.info(cadena.replace(new RegExp(eliminar, "ig"), ""))
}

/* eliminarPatron("xyz1, xyz2, xyz3") */
/* eliminarPatron("xyz1, xyz2, xyz3, yz4, yz5, xyz6", "xyz") */
eliminarPatron("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, fuga?", "[a-z]")
//Nota: Al pasarle una expresión regular me elimina todas las letras de la A a la Z

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
const getAleatorio = (min = 501, max = 600)=>{
    let aleatorio = Math.random()*(max-min)+min
    return console.info(Math.trunc(aleatorio))
} 
/* getAleatorio(); */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no(que se lee igual
    en un sentido que en otro). pe.miFuncion(2002) devolverá true */
const numCapicua = (numero = 0)=>{
    if(!numero) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error("No ingresaste un numero")
        let numInv = numero.toString().split("").reverse().join(''); 
            numInv = parseInt(numInv);
    
    if(numero === numInv) return console.info(`El número ${numero} es Capicúa`)
    else return console.info(`Ingresa otro número, ${numero} no es Capicúa`)
}
/* numCapicua("222"); */

/* 11) Programa una función que calcule el factorial de un número (El Factorial de un entero 
 positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)
 pe.miFuncion(5) devolverá 120 */ 
 const numFactorial = (numero = undefined)=>{
     if(numero === undefined) return console.warn("No ingresaste un numero");
        let actual = numero;
        /* console.info(factorial); */
     if(numero === 0 || numero === 1) return console.info(`El factorial de ${numero} es 1 `)
     
     if(typeof numero !== "number") return console.error("No ingresaste un numero")

     /* Otra manera de hacerlo:
     for( var i = numero -1; i >= 1; i--){
        numero = numero * i;
     } return console.info(numero); */

     let factorial = 1;
     for(let i = numero;i > 1; i--){
         factorial = factorial * i;
     } return console.info(factorial);
}   
numFactorial(5);

/* 12) Programa una función que determine si un número es primo
(aquel que solo es divisible por si mismo y 1) o no, pe.miFuncion(7) devolvera true*/
/* 13) Programa una función que determine si un numero es par o impar,
pe.miFuncion(29) devolverá Impar*/
/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
pe.miFuncion(0,"C") devolverá 32°F*/
/* 15) Programa una función para convertir números de base binaria a decimal y viceversa,
pe.miFuncion(100,2) devolverá 4 base 10 */
/* 16) Programa una función que devuelva el monto final después de aplicar un descuento 
a una cantidad dada, pe.miFuncion(1000,20) devolvera 800*/
/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado
hasta el día de hoy, pe.miFuncion(new Date(1984.4.23) devolverá 35 años(en 2020))*/
/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe.miFuncion("Hola Mundo") devuelve Vocales:4, Consonantes:5*/
/* 19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion
("Jonathan MirCha") devolverá verdadero*
/* 20) Programa una función que valide que un texto sea un email válido, pe.miFuncion
("jonmircha@gmail.com") devolverá verdadero*/