let reproduciendo = null;

function reproducirMelodia(idMelodia) {
    let melodia = document.getElementById(idMelodia);
    let botonDerecha = document.querySelector('.boton__melodias_derecha');

    if (reproduciendo !== null && reproduciendo !== idMelodia) {
        let melodiaActual = document.getElementById(reproduciendo);
        melodiaActual.pause();
        melodiaActual.currentTime = 0;
    }

    if (!melodia.paused) {
        melodia.pause();
        melodia.currentTime = 0;
        reproduciendo = null;
        botonDerecha.classList.remove('rotando');
    } else {
        melodia.play();
        reproduciendo = idMelodia;
        botonDerecha.classList.add('rotando');
    }
}

// Resto de tus funciones...

function musica_kalimba() {
    reproducirMelodia("musica_kalimba");
}



function musica_agua() {
    reproducirMelodia("musica_agua");
}

function musica_lofi() {
    reproducirMelodia("musica_lofi");
}

function musica_hogar() {
    reproducirMelodia("musica_hogar");
}

function musica_naturaleza() {
    reproducirMelodia("musica_naturaleza");
}

function musica_viajes() {
    reproducirMelodia("musica_viajes");
}

function musica_tibet() {
    reproducirMelodia("musica_tibet");
}

function musica_dream() {
    reproducirMelodia("musica_dream");
}
