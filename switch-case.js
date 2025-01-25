
// let expresion = "1"


// switch (expresion) {
//     case "1":
//         console.log('es 1')
//         console.log('Segunda linea')
//         break;
//     case "2":
//         console.log('es 2')
//         break;
//     default:
//         console.log('Es default')
// }


let calificacion = "B"

switch (calificacion) {
    case "A":
    case "B":
        console.log("Excelente")
        break;
    case "C":
        console.log("Bueno")
        break;
    case "S":
        console.log("Suficiente")
        break;
    default:
        console.log("Sorry")
}


//Usando swich case para evaluar el color de una fruta
//Si la fruta es Manzana, pera, platano, imprimir "El color de la fruta es amarillo o verde"
//Si la fruta es Fresa, mandarina, naranja, imprimir "El color de la fruta es rojo o anaranjado"
// un valor de salida por default "Fruta no encontrada"

let fruta = "naranja";

switch (fruta) {
    case "manzana":
    case "pera":
    case "plátano":
        console.log("El color de la fruta es amarillo o verde");
        break;
    case "fresa":
    case "mandarina":
    case "naranja":
        console.log("El color de la fruta es rojo o anaranjado");
        break;
    default:
        console.log("Fruta no encontrada");
}



fruta = 'Naranja';

switch (fruta) {
    case 'Manzana':
    case 'Pera':
    case 'Platano':
        console.log("la " + fruta + " es de color Amarillo o verde");
        break;
    case 'Fresa':
    case 'Mandarina':
    case 'Naranja':
        console.log("el " + fruta + " es de color Rojo o Anaranjado");
        break;
    default:
        console.log("Fruta no encontrada");
}

