/*
    Funcion Declarativa
*/

function sayHello(nombre) {
  
    console.log(`Hola soy ${nombre}`);

}

function sayHelloReturn(nombre, edad) {
  
    return (`${nombre} y tengo ${edad} años`);

}


sayHello("Luis");

let saludo = sayHelloReturn("Luis", 25);

console.log(`Hola yo soy ${saludo}`); // Luis y tengo 25 años



/**
 * Funcion Anonima
 */
const miFuncion = function (nombre) {
    console.log(`Hola soy ${nombre}`);
}


miFuncion("Luis");

/**
 * Funcion de flecha
 */

const fnSumar = (x,y) => x + y
const fnRestar = (x,y) => x - y
const fnMult = (x,y) => x * y
const fnDiv = (x,y) =>  x / y;

example();

const fnAllOperations = (x,y) => {

    return {
        titulo: "Operaciones Matematicas",
        suma: fnSumar(x,y),
        resta: fnRestar(x,y),
        mult: fnMult(x,y),
        div: fnDiv(x,y),
    }

}

console.log(fnAllOperations(5,5));   
