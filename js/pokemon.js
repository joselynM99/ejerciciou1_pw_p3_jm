
function cambiarImagen(){
    document.getElementById("pok").src = "../images/pcolor.jpg"
}

function respuestaIncorrecta(){
    document.getElementById('mns').innerHTML='Pokémon incorrecto, la respuesta es: excadrill'
    this.cambiarImagen()
    document.getElementById('txtinicial').style.color = "red"
}


function respuestaCorrecta(){
    document.getElementById('mns').innerHTML='Felicitaciones, has seleccionado la opción correcta'
    this.cambiarImagen()
    document.getElementById('txtinicial').style.color = "yellow"
}

function reiniciarJuego(){
    document.getElementById('pok').src = "../images/pnegro.jpg"
    document.getElementById('mns').innerHTML='Respuesta'
    document.getElementById('txtinicial').style.color = "black"
}