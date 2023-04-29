
let valor1=prompt("ingrese primer valor: ");
let valor2 =prompt("ingrese segundo valor: ");
let valor3=prompt("ingrese tercer valor: ");

let num=[valor1, valor2, valor3];

let mayor=num[0];

for(i=0;i<num.length;i++){
if(num[i]>mayor){
    mayor=num[i];
}

}
document.write("el numero mayor del arreglo es: " +mayor);