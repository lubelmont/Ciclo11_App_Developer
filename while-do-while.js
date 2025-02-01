
//While


let contador = 0;

while (contador < 10) {

    console.log(`Número: ${contador}`);
    contador++

}

let ejecutar = true;

let contadorWhile = 0

while (ejecutar) {

    console.log('Hola ' + contadorWhile);

    if (contadorWhile === 10) {
        ejecutar = false;
    }

    contadorWhile++

}

let ejecutarDoWhile = true;
let breakDoWhile = 0;
do {

    console.log(' do-while  - breakDoWhile= ' + breakDoWhile);

    breakDoWhile++;

    if (breakDoWhile === 10) {
        ejecutarDoWhile = false;
    }

} while (ejecutarDoWhile)
    ejecutarDoWhile = true;

while (ejecutarDoWhile) {

    console.log('while - breakDoWhile= ' + breakDoWhile);

    breakDoWhile++;

    if (breakDoWhile === 20) {
        ejecutarDoWhile = false;
    }

}







