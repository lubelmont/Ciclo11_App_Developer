// Ejercicio 1: Edad mínima para votar

// Escribe un programa que se le asigne un valor a una varibale "edad" y verifique si puede votar 
// (la edad mínima para votar es 18 años).
// Si es mayor o igual a 18, imprime

// "Puedes votar"
// de lo contrario, imprime

// "No puedes votar".

let edad = 17
 
if ( edad >= 18 ) 
    {
        console.log ("Puedes votar")
    }
else {
    console.log ("No puedes votar")
}
 




 

// Ejercicio 2: Número positivo o negativo
// Escribe un programa que se le asigne un valor a una varibale "numero" y verifique si es positivo, negativo o cero.

console.log('*************Ejercicio 2******************\n');

let numero = 0;
 
if (numero > 0 ){

    console.log("Es positivo")

}else if(numero<0){

    console.log("Es negativo")

}else{

  console.log("Es cero ")

}


numero = -1;

if (numero > 0) {
  console.log('Es número ' +numero+' es positivo');
} else if (numero < 0) {
  console.log('Es número ' +numero+' es negativo');
} else {
  console.log('El número es cero');
}

console.log('*******************************\n');


// Ejercicio 3: Comparar dos números
// Escribe un programa que se le asigne un valor a dos varibales y determine cuál es mayor, menor o si son iguales.

console.log('************Ejercicio 3: Comparar dos números*******************\n');

let variableA = 1
let variableB = 10000
 
if (variableA < variableB) 
{
        console.log(variableA + " es menor que " + variableB)
} else if (variableA > variableB) 
    {
        console.log(variableA + " es mayor que " + variableB)
    }
else {
    console.log (variableA + " es igual que " + variableB)
}


console.log('*******************************\n');
// Ejercicio 4: Número par o impar
// Escribe un programa que se le asigne un valor a una varibale y verifique si es par o impar.

// NOTA> Estudia el uso de % en JS

// Visita Operador Residio

console.log('************Ejercicio 4: Número par o impar*******************\n');

let numeroParInpar = 25;
let division = numeroParInpar % 2;
 
if (division === 0) {
  console.log('El número '+numeroParInpar+ ' es par');
} else {
  console.log('El número '+numeroParInpar+ ' es impar');
}
 

// Ejercicio 5: Calificaciones
// Escribe un programa que se le asigne un valor a una varibale "calificación" numérica (del 0 al 100) y muestre el nivel de acuerdo a la siguiente escala:

// 90-100: Excelente
// 70-89: Bueno
// 50-69: Suficiente
// 0-49: Insuficiente
console.log('************Ejercicio 5: Calificaciones*******************\n');

let calificacion = 49
 
if (calificacion>89) 
    {
        console.log("Excelente")
    }
else if (calificacion>69 && calificacion<90) 
    {
        console.log("Bueno")
    }
else if (calificacion>49 && calificacion<70) 
    {
        console.log("Suficiente")
    }
else 
    {
        console.log ("Insuficiente")
    }


 calificacion = 50;
 
 if ( calificacion <= 100 && calificacion>=90){
      console.log("Excelente")
    }else if ( calificacion <= 89 && calificacion>=70){
      console.log("Bueno")
    }else if ( calificacion <= 69 && calificacion>=50){
      console.log("Suficiente")
    }else if ( calificacion <= 49 && calificacion>=0){
      console.log("Insuficiente")
    }else{
      console.log("Fuera de rango")
    }



// Ejercicio 6: Verificación de contraseña
// Escribe un programa que se le asigne un valor a una varibale de contraseña al 
// usuario y verifique si es correcta (la contraseña correcta es "admin123").

// Si es correcta, muestra "Acceso concedido"
// Si no, "Acceso denegado".


console.log('************Ejercicio 5: Calificaciones *************\n');

let contra = "admin123"
 
if(contra==="admin123")
    {
        console.log("acceso concedido")
    }
else{
  console.log("Acceso denegado ");
}


 

// Ejercicio 7: Verificar si un número está en un rango
// Escribe un programa que se le asigne un valor a una varibale numerica y verifique si está entre 10 y 20 (inclusive).

console.log('************Ejercicio 7: Verificar si un número está en un rango*************\n');

let rangoNum = 1;
 
if (rangoNum >= 10 && rangoNum <= 20) {
  console.log("El numero "+rangoNum+" Está entre 10 y 20");
} else {
  console.log("El numero "+rangoNum+" No está entre 10 y 20");
}

// Ejercicio 8: Mayor de tres números
// Escribe un programa que se le asigne un valor a tres números y determine cuál es el mayor.


console.log('************Ejercicio 8: Mayor de tres números*************\n');

let num1 = 6;
let num2 = 9;
let num3 = 100;
 
if (num1 > num2){

    if(num1 > num3){
      console.log("El número mayor es num1")
    }else{
      console.log("El número mayor es num3")
    }

}else if(num2 > num3){
  
    console.log("El número mayo es num2")

}else{
  
    console.log("El número mayor es num3")

}


 

// Ejercicio 9: Verificar si una cadena está vacía
// Escribe un programa que se le asigne un valor de texto y verifique si la cadena está vacía o no.

console.log('************Ejercicio 9: Verificar si una cadena está vacía*************\n');


let cadena="";
 
if(cadena.length===0){
 
  console.log("Cadena vacía")
}else{
 
  console.log("Cadena NO vacía")
}

// Ejercicio 10: Determinar el día de la semana
// Escribe un programa que se le asigne un valor numerico del 1 al 7 al usuario y muestre qué día de la semana corresponde (1 para lunes, 2 para martes, etc.).


console.log('************Ejercicio 10: Determinar el día de la semana*************\n');

let diaSemana = 10
 
if (diaSemana === 1) {console.log ("Lunes")}
  else if (diaSemana === 2) {console.log ("Martes")}
  else if (diaSemana === 3) {console.log ("Miércoles")}
  else if (diaSemana === 4) {console.log ("Jueves")}
  else if (diaSemana === 5) {console.log ("Viernes")}
  else if (diaSemana === 6) {console.log ("Sábado")}
  else if (diaSemana === 7) {console.log ("Domingo")}
  else {console.log ("No válido")}