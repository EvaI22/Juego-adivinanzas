let numeroSecreto = 0;
let intentos = 0;
let listaSorteados = [];
let numeroMax = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // Con esto obtenemos el numero que ingresa el usuario
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Adivinaste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"} `); 
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else { // El usuario no acertó

        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento("p", "El número es menor");
        } else {
            asignarTextoElemento("p", "El número es mayor")
        }

        intentos++;
        limpiarCaja(); // Para que no aparezca el numerito en la caja
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = "";
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


function generarNumeroSecreto() { // Me genera el numero secreto
    let numeroSorteado = Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroSorteado);
    console.log(listaSorteados);

    if (listaSorteados.length == numeroMax) {
        asignarTextoElemento("p", "Ya se han sorteado todos los números")

    } else {
        if (listaSorteados.includes(numeroSorteado)) {
            return generarNumeroSecreto(); // Recursividad hasta que saque otro numero no mencionado
    
        } else {
            listaSorteados.push(numeroSorteado);
            return numeroSorteado; // No lo jugaron anteriormente asi que lo uso.
        }    
    }
}



function asignarTextoElemento(elemento, texto) { // Con esto se asignan los textos que vemos en pantalla, no consola
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

condicionesIniciales();