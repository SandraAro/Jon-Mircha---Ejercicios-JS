//Puedo exportar e importar funciones
export function sumar(a,b){
  return  a + b;
}

export function restar(a,b){
    return a - b;
}

//objeto que contiene funciones ya definidas, no las asigno a una propiedad solo 
export const aritmetica={
    sumar,
    restar,
}