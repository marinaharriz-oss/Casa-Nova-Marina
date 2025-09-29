const objetivo = 3000;
let arrecadado = 1200;
const progressBar = document.getElementById('progress-bar');

function updateProgress() {
  let percent = Math.min((arrecadado  objetivo)  100, 100);
  progressBar.style.width = percent + '%';
  progressBar.textContent = `R$${arrecadado}  R$${objetivo} (${percent.toFixed(0)}%)`;
}
updateProgress();

const targetDate = new Date(Dec 31, 2025 000000).getTime();
const contador = document.getElementById('contador');

setInterval(() = {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance  0) {
    contador.textContent = O evento já aconteceu!;
    return;
  }

  const days = Math.floor(distance  (1000  60  60  24));
  const hours = Math.floor((distance % (1000  60  60  24))  (1000  60  60));
  const minutes = Math.floor((distance % (1000  60  60))  (1000  60));
  const seconds = Math.floor((distance % (1000  60))  1000);

  contador.textContent = `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
