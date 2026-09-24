function abrirInvitacion() {
  document.getElementById("overlay").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("overlay").style.display = "none";
  }, 800);
  
  var audio = document.getElementById("musica");
  if (audio) {
    audio.play().catch(function(error) {
      console.log("Auto-play prevenido por el navegador.");
    });
  }
}

// La fecha se configura así: (Año, Mes-1, Día, Hora, Minutos, Segundos)
// En JavaScript Noviembre es el mes 10 (porque se cuenta desde 0=Enero hasta 11=Diciembre).
// Año 2026, Mes 10 (Noviembre), Día 15, Hora 21, Minutos 0
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
