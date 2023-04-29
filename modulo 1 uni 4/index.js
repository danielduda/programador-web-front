//ejercicio 2 javascript


let valor1= parseInt (prompt("ingrese primer valor numerico: "));   //le pedimos al usuario que ingrese los valores numéricos.
let valor2 = parseInt (prompt("ingrese segundo valor numerico: ")); 
let valor3=parseInt (prompt("ingrese tercer valor numerico: ")); 

let num=[valor1, valor2, valor3]; //los números ingresarán a nuestro arreglo llamado num.
let mayor=num[0]; //empezamos asignando que el máximo valor sea el número de nuestro arreglo en el índice 0 por defecto ocupado por el valor1.


for(let i=1;i<num.length;i++){ //bucle  for para recorrer cada uno de los números de nuestro arreglo. 
                            //declaramos la variable i y la inicializamos dentro del bucle for.
                            //utilizamos .length para que recorra toda la extensión del arreglo.
    
    if(num[i]>mayor){ //es en la variable i donde se van a guardar los índices del arreglo que fue recorrido.
    //entonces comparamos si el valor en cada una de las posiciones resulta mayor que nuestra variable llamada mayor.    
     mayor=num[i];  //de ser esta condición verdadera, entonces le asignamos el nuevo valor a nuestra variable mayor.

}

}
document.write("el numero mayor del arreglo es: " +(mayor)); //luego mostramos por pantalla, el valor resultante en nuestra variable mayor.