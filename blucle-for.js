

/*

Variable de control x
inicializacion: x = 0
condicion: x < 10 - Ejecucion mintras la condicion sea verdadera
actualizacion: x = x + 1

*/

// x++       (x = x + 1)

// for (let x = 1; x <= 100; x++) {

//    console.log(x)

// }


// Sumar los numero que hay entre 1 y un limite dado
let suma = 0;
let limite = 1000;

for (let x = 1; x <= limite; x++) {
    
    suma += x; // -> suma = suma + x;    
}

console.log(`La suma de todos los numero de 1 al ${limite} es ${suma}`)
console.log('La suma de todos los numero de 1 al ' + limite + ' es '+ suma)












