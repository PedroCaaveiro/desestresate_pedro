//  FUNCIONES PAGINA MELODIAS PARA SONAR LA MUSICA

let reproduciendo = null;

function reproducirMelodia(idMelodia) {
  let melodia = document.getElementById(idMelodia);
  let boton = document.querySelector(`#${idMelodia}`).previousElementSibling;

  if (reproduciendo !== null && reproduciendo !== idMelodia) {
    let melodiaActual = document.getElementById(reproduciendo);
    melodiaActual.pause();
    melodiaActual.currentTime = 0;

    let botonActual = document.querySelector(
      `#${reproduciendo}`
    ).previousElementSibling;
   
    botonActual.style.backgroundColor = "var(--green)";
  }

  if (!melodia.paused) {
    melodia.pause();
    melodia.currentTime = 0;
    reproduciendo = null;

   
  } else {
    melodia.play();
    reproduciendo = idMelodia;
    boton.style.backgroundColor = "var(--blue)";

  }
 
}

// RESTO DE FUNCIONES PARA SONAR MELODIA

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

/******** FIN  FUNCIONES PAGINA MELODIAS */

// FUNCIONES PAGINA MEDITACION CRONOMETRO
let tiempoRestante = 300; // 5 minutos en segundos
let intervalo;

function iniciarMeditacion() {
  const contenedorAnimacion = document.querySelector('.animacion_circulo_uno_meditacion');
  contenedorAnimacion.classList.add('mostrar-animacion');

  //REINICIA EL TEMPORIZADOR Y LIMPIA EL TEXTO
  reiniciarMeditacion();

  // INICIA EL TEMPORIZADOR
  intervalo = setInterval(function () {
    actualizarCronometro();
    mostrarGuia();
  }, 1000);
}

function actualizarCronometro() {
  const cronometro = document.getElementById('cronometro');

  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;

  cronometro.textContent = `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

  // DetIENE EL TIEMPO CUANDO LLEGUE A 0
  if (tiempoRestante === 0) {
    clearInterval(intervalo);
  
  } else {
    tiempoRestante--;
  }
}

// FUNCION PARA MOSTRAR EL MENSAJE 
function mostrarGuia() {
    const guia = document.getElementById('guia');
    const guias = [ 'EXPIRA', 'INSPIRA'];
  
    if (tiempoRestante > 0) {
      const indice = Math.floor(tiempoRestante / 3) % guias.length;
      guia.textContent = `${guias[indice]}`;
      // NO MUESTRA MAS MENSAJES CUANDO LLEGA A 0
    } else {
      guia.textContent = ''; 
    }
  }
  

function reiniciarMeditacion() {
  clearInterval(intervalo);
  //REINICIAR A 5 MINUTOS 
  tiempoRestante = 300; 
  // REESTABLECE EEL TEXTO 
  document.getElementById('cronometro').textContent = '00:05:00'; 
   // LIMPIA EL CONTENIDO AL FINAL DE LOS 5 MINUTOS 
  document.getElementById('guia').textContent = '';
}
