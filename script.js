function abrirInvitacion() {
  const overlay = document.getElementById("overlay");
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 800);
  
  var audio = document.getElementById("musica");
  if (audio) {
    audio.play().catch(function(error) {
      console.log("El navegador bloqueó la reproducción automática.");
    });
  }
}

function toggleMusica() {
  var audio = document.getElementById("musica");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

/* Generador de Lluvia de Estrellas CAYENDO desde arriba */
function crearEstrellas() {
  const container = document.getElementById('estrellas-container');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const estrella = document.createElement('div');
    estrella.className = 'estrella';
    estrella.innerText = '✨';
    estrella.style.left = Math.random() * 100 + 'vw';
    estrella.style.animationDuration = (Math.random() * 3 + 2) + 's';
    estrella.style.animationDelay = Math.random() * 5 + 's';
    estrella.style.fontSize = (Math.random() * 10 + 10) + 'px';
    container.appendChild(estrella);
  }
}

document.addEventListener("DOMContentLoaded", crearEstrellas);

/* Configuración del Reloj: 15 Noviembre 2026 - 21:00 hs */
const fechaEvento = new Date(2026, 10, 15, 21, 0, 0).getTime();

setInterval(function() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia > 0) {
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias < 10 ? '0' + dias : dias;
    document.getElementById("horas").innerText = horas < 10 ? '0' + horas : horas;
    document.getElementById("minutos").innerText = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById("segundos").innerText = segundos < 10 ? '0' + segundos : segundos;
  }
}, 1000);
