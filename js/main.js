alert("¡Bienvenidos a Guarderia Cuatro Patas!");

console.log("Somos una guarderia felina ubicada en Nuñez");

const animal = "gatos";
let nombre = "Julieta";
let edad = 30;
let profesion = "Veterinaria";

console.log("Bienvenidos soy" + " " + nombre + " " + "tengo" + " " + edad + " " + "años, soy" + " " + profesion + " " + "y cuento con una guarderia exclusiva para" + " " + animal );

confirm("¿Estas buscando un hospedaje para tu gato?")

prompt("¿En que zona vive?")
function ubicacion (lugar){
    return lugar;
}

let res = prompt("¿Que edad tiene su gato?");

    while(res <= 15){
        console.log("Su animal puede gozar de la estadia")
        break
    }


let numero = prompt("¿Cuantos gatos tiene?");
cantidad(numero);

function cantidad (numero){

    if (numero >= 3){
        console.log("Se aplica un 20% de descuento sobre la estadia")
        
    } else if (numero === 2){
        console.log("Se aplica un 10% de descuento sobre la estadia")
        
    } else{
        console.log("La estadia es de 1000 por noche")
    }
}


let metodoPago = prompt("Indique su metodo de pago")

switch (metodoPago){
    case "efectivo":
        console.log("Usted paga en "+ metodoPago);
        break
    case "Tarjeta":
        console.log("Usted paga en "+ metodoPago);
        break
    default:
        console.log("No se acepta "+ metodoPago)
}

let nochesEstadia = prompt("¿Cuantos dias desea solicitar para la estadia de su gato?")
let precioNoche = 1000;

function multiplicar (precioNoche , nochesEstadia){
        return precioNoche * nochesEstadia;  
    }
    let resultado = multiplicar(precioNoche , nochesEstadia)
    console.log("El costo total de la estadia es de " + resultado);





