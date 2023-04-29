//ejercicio 1


//ejercicio 1 javascript

//se solicita al usuario que ingrese la distancia en metros, este valor se va a guardar en la variable distancia.
let distancia = prompt ("introduce distancia (mts): "); 


if (distancia <=1000){ //estructura de control comparando el valor ingresado por el usuario y los límites requeridos por cada transporte.


document.write("Distancia ideal para recorrer a pie.")


}

else if (distancia <=10000){

document.write("Distancia ideal para recorrer en bicicleta.")


} else if (distancia <=30000){


document.write("Distancia ideal para tomar un colectivo");

}

else if(distancia <=100000){


document.write("Distancia ideal para recorrer en auto");

}

else{ //más allá de los límites, imprime en pantalla avión.

document.write("Lo ideal para esa distancia es un avion");

}


