const boton1=document.getElementById("boton1");
const boton2=document.getElementById("boton2");
const boton3=document.getElementById("boton3");
const fondo=document.getElementById("fondo");



boton1.addEventListener("click", function(){
    fondo.style.backgroundColor="red";
});

boton2.addEventListener("click", function(){
    fondo.style.backgroundColor="green";
});

boton3.addEventListener("click", function(){
    fondo.style.backgroundColor="aqua";
});


function contadorCaracteres(){

    const mensaje=document.getElementById("mensaje");
    const contador=document.getElementById("contador");

    const caracter=mensaje.value.length;
    contador.textContent=caracter + "caracteres";
    
}

mensaje.addEventListener("input", contadorCaracteres);