alert("¡Bienvenidos a Guarderia Cuatro Patas!");

console.log("Somos una guarderia felina ubicada en Nuñez");

const animal = "gato";
let nombre = "Julieta";
let edad = 30;
let profesion = "Veterinaria";

console.log("Soy" + " " + nombre + " " + "tengo" + " " + edad + " " + "años, soy" + " " + profesion + " " + "y cuento con una guarderia exclusiva para" + " " + animal );

confirm("¿Estas buscando un hospedaje para tu gato?")

let edadGato = prompt("¿Que edad tiene el animal?");

    if(edadGato<1){
        console.log("Su animal no puede gozar de la estadia")
    }
    for(let edadGato=1; edadGato<=15; edad=edadGato+1){
        console.log("Su animal puede gozar de la estadia");    
        break
    }


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
    console.log("La estadia es de 1000 por noche")
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

if (nochesEstadia>=1 &&  nochesEstadia<=15){
    function multiplicar(precio, nochesEstadia){
        return precio*nochesEstadia;
    }
    let costoTotal = multiplicar(precio, nochesEstadia);
    console.log("El costo total de la estadía es de $" + costoTotal)
}

let precio2 = 900
if (nochesEstadia>15 &&  nochesEstadia<=30){
    function multiplicar(precio2, nochesEstadia){
        return precio2*nochesEstadia;
    }
    let costoTotal = multiplicar(precio2, nochesEstadia);
    console.log("El costo total de la estadía es de $" + costoTotal)
}



