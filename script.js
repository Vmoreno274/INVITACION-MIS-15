function abrirInvitacion() {
  const overlay = document.getElementById("overlay");
  overlay.style.transform = "translateY(-100%)";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 800);
  
  var audio = document.getElementById("musica");
  if (audio) {
    audio.play().then(() => {
      document.getElementById("icono-musica").className = "fa-solid fa-pause";
    }).catch(function(error) {
      console.log("El navegador requiere toque previo para iniciar el audio.");
    });
  }
}

function toggleMusica() {
  var audio = document.getElementById("musica");
  var icono = document.getElementById("icono-musica");
  
  if (audio.paused) {
    audio.play();
    icono.className = "fa-solid fa-pause";
  } else {
    audio.pause();
    icono.className = "fa-solid fa-music";
  }
}

/* Ampliar Fotos en Galería */
function ampliarImagen(src) {
  document.getElementById("img-modal-src").src = src;
  document.getElementById("modal-foto").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal-foto").style.display = "none";
}

/* Enviar Confirmación por WhatsApp */
function enviarWhatsApp() {
  const nombre = document.getElementById("nombre-asistente").value;
  const opcion = document.getElementById("asistencia-opcion").value;
  
  if (!nombre.trim()) {
    alert("Por favor, ingresá tu nombre antes de confirmar.");
    return;
  }
  
  const mensaje = encodeURIComponent(`Hola! Soy ${nombre}. ${opcion} a los 15 de Nicole ✨`);
  window.open(`https://wa.me/541156167548?text=${mensaje}`, '_blank');
}

/* Contador Regresivo al 15 Noviembre 2026 a las 21:00 hs */
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
