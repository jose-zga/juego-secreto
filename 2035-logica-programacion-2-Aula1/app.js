let numeroSecreto = 0;
let intentos = 0;
let listDeNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);
function asignarTextoElemnto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemnto('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemnto('p', 'El número secreto en menor');
        } else {
            asignarTextoElemnto('p', 'EL número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroSecreto);
    console.log(listDeNumerosSorteados);
    //Si ya sorteamos todos los numeros en la pantalla
    if (listDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemnto ('p', 'Ya se sortearon todos los números posibles');
    } else {
    //Si el número generado está en la lista
        if (listDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

function condicionesIniciales() {
    asignarTextoElemnto('h1', 'Juego del número secreto!');
    asignarTextoElemnto('p', `Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    // indicar mesaje de intervalos de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
