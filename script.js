// Control de Música con botón flotante
var reproduciendo = false;
var audio = document.getElementById("musica");
var icon = document.getElementById("icon-musica");

function toggleMusica() {
  if (reproduciendo) {
    audio.pause();
    icon.className = "fa-solid fa-music";
  } else {
    audio.play();
    icon.className = "fa-solid fa-pause";
  }
  reproduciendo = !reproduciendo;
}

// Intentar reproducir al primer toque del usuario en la pantalla
document.body.addEventListener('click', function() {
  if (!reproduciendo && audio) {
    audio.play().then(() => {
      reproduciendo = true;
      icon.className = "fa-solid fa-pause";
    }).catch(e => console.log("Esperando toque del usuario."));
  }
}, { once: true });

// Contador para el 15 de Noviembre de 2026 a las 22:00 HS
const fechaEvento = new Date(2026, 10, 15, 22, 0, 0).getTime();

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
