// Listar las peliculas y su categoria
// Salida esperada:
/*
    🎭 Drama: El Padrino
    🔥 Acción: Avengers: Endgame
    🎨 Animación: Buscando a Nemo
    🎭 Drama: Pulp Fiction
    🔥 Acción: Gladiador
    🎨 Animación: Toy Story
*/

//arrglo = ["🎭","🔥","🎨"];
//objeto = { "🎭": "Drama", "🔥": "Acción", "🎨": "Animación" };


// arreglos = [0,1,2,3,4,5]

const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];



  //const PI = 3.1416
  //let radio = 5;

//Varible Globa.... Var JS.... 
  
  let iconDrama = "🎭";
  let iconAccion = "🔥";
  let iconanimacion= "🎨";

  console.log(" .................EJERCICIO 1.................\n ")
  for (let i = 0; i < peliculas.length ; i++){

    if (peliculas[i].genero == "Drama"){
        console.log(iconDrama+" "+ peliculas[i].genero+" : "+peliculas[i].titulo);

    }else  if (peliculas[i].genero == "Acción"){
        console.log(iconAccion+" "+ peliculas[i].genero+" : "+peliculas[i].titulo);

    }else  if (peliculas[i].genero == "Animación"){
        console.log(iconanimacion+" "+ peliculas[i].genero+" : "+peliculas[i].titulo);

    }

  }






// Ejercicio 2: Filtrar la pelicula por bussqueda 
console.log("\n .................EJERCICIO 2.................\n ")

let busqueda = "Buscando a Nemo";

let peliculaEncontrada = false;

for (let i = 0; i < peliculas.length ; i++){

    if (busqueda === peliculas[i].titulo ){
        console.log(`La pelicula ${busqueda} su genero es ${peliculas[i].genero}`);
        peliculaEncontrada = true;
        break;
    }     
    console.log(i)
}

if(!peliculaEncontrada){
    console.log("No se encontro la pelicula "+busqueda);
}



// Ejercicio 3: Cuantas peliculas hay por genero.
let generoDrama = 0;
let generoAnimacion = 0;
let generoAccion = 0;
let singenero = 0 ;

console.log("\n .................EJERCICIO 3.................\n ")

for (let i = 0; i < peliculas.length ; i++){
        if (peliculas[i].genero  == "Drama"){
            
            generoDrama++

        }else if (peliculas[i].genero  == "Animación"){ 
            
            generoAnimacion +=  1;
        
        }else if (peliculas[i].genero  == "Acción"){ 
        
            generoAccion = generoAccion + 1 ;
        
        }else{
            singenero = singenero +1;
        } 
    }

    console.log("Peliculas de Drama 🎭 son "+generoDrama
             +"\nPeliculas de Animación 🎨 son "+generoAnimacion
             +"\nPeliculas de Accion 🔥 son "+generoAccion
             +"\nPeliculas sin genero  son "+singenero
    );






