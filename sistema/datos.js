
document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("backgroundMusic");

    // Restaurar el tiempo de reproducción
    var savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
        audio.currentTime = savedTime;
    }

    // Reproducir automáticamente
    audio.play();

    // Guardar el tiempo de reproducción antes de salir de la página
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicTime", audio.currentTime);
    });
});