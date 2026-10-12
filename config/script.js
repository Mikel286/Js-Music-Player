const canciones = [
  { titulo: "Canción 1", archivo: "audio/cancion1.mp3" }
];

const lista = document.getElementById("list");
const audio = document.getElementById("audio");
const btnPlay = document.getElementById("play");
const btnPrev = document.getElementById("previous");
const btnNext = document.getElementById("next");
let actual = 0; // índice de la canción actual

function cargar(i) {
  actual = i;
  audio.src = canciones[i].archivo;
  audio.play();
}

btnPlay.addEventListener("click", () => {
  if (!audio.src) cargar(actual);
  else audio.paused ? audio.play() : audio.pause();
});

btnNext.addEventListener("click", () => cargar((actual + 1) % canciones.length));
btnPrev.addEventListener("click", () => cargar((actual - 1 + canciones.length) % canciones.length));

canciones.forEach((c, i) => {
  const li = document.createElement("li");
  li.textContent = c.titulo;
  li.addEventListener("click", () => cargar(i));
  lista.appendChild(li);
});