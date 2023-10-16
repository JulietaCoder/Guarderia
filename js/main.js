alert("¡Bienvenidos a Guarderia Cuatro Patas!");

console.log("Somos una guarderia felina ubicada en Palermo");

const animal = "gato";
let nombre = "Julieta";
let edad = 30;
let profesion = "Veterinaria";

console.log("Soy" + " " + nombre + " " + "tengo" + " " + edad + " " + "años, soy" + " " + profesion + " " + "y cuento con una guarderia exclusivo de" + " " + animal );

let respuesta = prompt("¿Cuantos gatos tiene?");
let precio = 1000;


if (respuesta >= 3){
    precio === 2400
    console.log("Se aplica un 20% de descuento sobre la estadia")
} else if (respuesta == 2){
    precio == 1800
    console.log("Se aplica un 10% de descuento sobre la estadia")
} else{
    precio === 1000
    console.log("La estadia es de 1000")
}

let edadGato = prompt("¿Que edad tiene el animal?");

    for(let edadGato=1; edadGato<=10; edad=edadGato+1){
        console.log("Su animal puede gozar de la estadia");    
        break
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



