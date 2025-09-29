Beleza, bora deixar esse código **limpo, fluido e organizado** pra você.

Vou te entregar uma versão **completa, funcionando e fácil de manter**, com HTML, CSS e JS separados dentro do mesmo arquivo, tudo certinho.

---

# Aqui está a versão atualizada e ajustada do seu código:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Chá de Casa Nova da Marina</title>
  <style>
    /* RESET SIMPLES */
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #fffafc;
      color: #333;
      line-height: 1.6;
    }

    header {
      background: #f8dce2;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 5px rgba(179, 71, 102, 0.3);
    }

    header h1 {
      margin: 0;
      font-size: 2.5rem;
      color: #b34766;
    }

    #contador {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #f8dce2;
      padding: 12px 20px;
      border-radius: 12px;
      font-weight: bold;
      color: #b34766;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      font-size: 1rem;
      user-select: none;
    }

    main {
      max-width: 1100px;
      margin: 80px auto 40px;
      padding: 0 20px;
    }

    h2 {
      color: #b34766;
      text-align: center;
      margin-bottom: 20px;
    }

    .before-after {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
      margin-bottom: 40px;
    }

    .before-after div {
      text-align: center;
    }

    .emoji {
      font-size: 2.5rem;
      margin-bottom: 12px;
      display: block;
    }

    .before-after img {
      width: 100%;
      max-width: 400px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .before-after img:hover {
      transform: scale(1.05);
    }

    .story {
      text-align: center;
      margin-bottom: 40px;
      padding: 0 10px;
      font-size: 1.1rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .how-to-help {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
      margin-bottom: 50px;
      text-align: center;
    }

    .how-to-help div {
      background: #ffe6ec;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      transition: background 0.3s ease;
      cursor: default;
    }

    .how-to-help div:hover {
      background: #ffd1df;
    }

    .how-to-help h3 {
      margin-bottom: 10px;
      color: #b34766;
    }

    .obra, .gallery, .gift-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 50px;
    }

    .obra img, .gallery img, .gift-item img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .obra img:hover, .gallery img:hover, .gift-item img:hover {
      transform: scale(1.05);
    }

    .gift-item {
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: box-shadow 0.3s ease;
    }

    .gift-item:hover {
      box-shadow: 0 4px 12px rgba(179, 71, 102, 0.4);
    }

    .gift-item h3 {
      margin: 10px 0 5px;
      color: #b34766;
    }

    .gift-item p {
      margin: 5px 0 15px;
      font-weight: bold;
      font-size: 1.1rem;
    }

    .gift-item button {
      background: #b34766;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;
    }

    .gift-item button:hover {
      background: #8c2f4d;
    }

    .progress-container {
      background: #f3d9e0;
      border-radius: 12px;
      padding: 5px;
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      box-shadow: inset 0 2px 6px rgba(179, 71, 102, 0.3);
    }

    .progress-bar {
      background: #b34766;
      height: 35px;
      border-radius: 12px;
      width: 0%;
      color: white;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: width 1s ease;
      user-select: none;
      font-size: 1rem;
    }

    #music-icon {
      position: fixed;
      bottom: 20px;
      left: 20px;
      font-size: 2.5rem;
      cursor: pointer;
      z-index: 1000;
      user-select: none;
      transition: transform 0.3s ease;
    }

    #music-icon:hover {
      transform: scale(1.2);
    }

    footer {
      background: #f8dce2;
      padding: 20px;
      text-align: center;
      color: #b34766;
      margin-top: 40px;
      border-top: 2px solid #b34766;
      font-size: 0.95rem;
      line-height: 1.4;
    }

    footer p {
      margin: 5px 0;
      word-break: break-word;
    }

    /* RESPONSIVO */

    @media (max-width: 600px) {
      header h1 {
        font-size: 1.8rem;
      }

      .progress-bar {
        font-size: 0.85rem;
      }

      .gift-item h3 {
        font-size: 1.1rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>Chá de Casa Nova da Marina</h1>
  </header>

  <div id="contador">Carregando contador...</div>

  <main>
    <section class="before-after">
      <div>
        <span class="emoji">🏠🎁🧹</span>
        <h2>Início de um sonho</h2>
        <img src="images/inicio.png" alt="Início de um sonho" />
      </div>
      <div>
        <span class="emoji">🍽️🛋️🌿</span>
        <h2>Deu tudo certo</h2>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Deu tudo certo" />
      </div>
    </section>

    <section class="story">
      <h2>História</h2>
      <p>Aqui vai o texto contando a sua trajetória até este momento especial. Pode ser algo emocionante, divertido e íntimo para compartilhar apenas com amigos e familiares próximos ❤️.</p>
    </section>

    <section class="how-to-help">
      <div>
        <h3>🎁 Escolher um presente</h3>
        <p>Selecione um item da lista de presentes e contribua pelo PIX com o valor correspondente.</p>
      </div>
      <div>
        <h3>💰 Ajudar na cota</h3>
        <p>Contribua para uma cota coletiva de algum produto e participe da realização do sonho da casa nova.</p>
      </div>
      <div>
        <h3>❤️ Qualquer valor</h3>
        <p>Doe qualquer valor de coração, sem compromisso, para ajudar a Marina na nova casa.</p>
      </div>
    </section>

    <section>
      <h
    <section>
      <h2>Evolução da Obra</h2>
      <div class="obra">
        <img src="https://images.unsplash.com/photo-1581091870622-3d7b1bb0e6b0" alt="Obra 1" />
        <img src="https://images.unsplash.com/photo-1581090700227-4c4f8d5d3a3b" alt="Obra 2" />
        <img src="https://images.unsplash.com/photo-1600585154209-c3a1e8c6bb25" alt="Obra 3" />
      </div>
    </section>

    <section>
      <h2>Galeria</h2>
      <div class="gallery">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" alt="Foto 1" />
        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="Foto 2" />
        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="Foto 3" />
      </div>
    </section>

    <section>
      <h2>Lista de Presentes / Cotas</h2>
      <div class="gift-grid">
        <div class="gift-item">
          <img src="https://images.unsplash.com/photo-1586201375761-83865001e17d" alt="Liquidificador" />
          <h3>Liquidificador</h3>
          <p>R$150</p>
          <button onclick="alert('Contribua com R$150 via PIX!')">Contribuir</button>
        </div>
        <div class="gift-item">
          <img src="https://images.unsplash.com/photo-1617196039897-7e1c2c9b472b" alt="Jogo de Panelas" />
          <h3>Jogo de Panelas</h3>
          <p>R$300</p>
          <button onclick="alert('Contribua com R$300 via PIX!')">Contribuir</button>
        </div>
      </div>
    </section>

    <section>
      <h2>Ajudando a Marina a conquistar a geladeira dos sonhos</h2>
      <div class="progress-container">
        <div class="progress-bar" id="progress-bar">0%</div>
      </div>
    </section>
  </main>

  <div id="music-icon" title="Tocar / Pausar música">🎵</div>

  <footer>
    <p>Chave PIX: <strong>(11) 97578-0421</strong></p>
    <p>Endereço: Rua das Gardênias, 25, apto 61 - Mirandólis - São Paulo</p>
  </footer>

  <script>
    // Valores para o progresso da geladeira
    const objetivo = 3000;
    let arrecadado = 1200; // Pode alterar conforme necessidade

    const progressBar = document.getElementById('progress-bar');

    function updateProgress() {
      const percent = Math.min((arrecadado / objetivo) * 100, 100);
      progressBar.style.width = percent + '%';
      progressBar.textContent = `R$${arrecadado} / R$${objetivo} (${percent.toFixed(0)}%)`;
    }

    updateProgress();

    // Contador regressivo
    const targetDate = new Date("Dec 31, 2025 00:00:00").getTime();
    const contador = document.getElementById('contador');

    setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        contador.textContent = "O evento já aconteceu!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      contador.textContent = `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s para o Chá!`;
    }, 1000);

    // Música (exemplo básico)
    const musicIcon = document.getElementById('music-icon');
    let isPlaying = false;
    let audio = new Audio('https://www.bensound.com/bensound-music/bensound-sunny.mp3'); // música de exemplo grátis

    musicIcon.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        musicIcon.textContent = "🎵";
      } else {
        audio.play();
        musicIcon.textContent = "🔈";
      }
      isPlaying = !isPlaying;
    });
  </script>
</body>
</html>
