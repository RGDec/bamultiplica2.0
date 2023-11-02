let contador = 0;
let boton = document.getElementById("boton");
let contadorElemento = document.getElementById("contador");

boton.addEventListener("click",function(){
    contador++;
    contadorElemento.innerHTML = contador;
});