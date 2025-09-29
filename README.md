<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Chá de Casa Nova da Marina</title>
  <style>
    /* Reset simples */
    *, *::before, *::after {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #fffafc;
      color: #333;
      line-height: 1.5;
      font-size: 1rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    header {
      background: #f8dce2;
      padding: 2rem 1rem;
      text-align: center;
      width: 100%;
      box-shadow: 0 2px 5px rgba(179, 71, 102, 0.3);
      flex-shrink: 0;
    }

    header h1 {
      margin: 0;
      font-size: 2.5rem;
      color: #b34766;
      font-weight: 700;
      line-height: 1.1;
    }

    #contador {
      position: fixed;
      top: 1rem;
      right: 1rem;
      background: #f8dce2;
      padding: 0.8rem 1.2rem;
      border-radius: 12px;
      font-weight: bold;
      color: #b34766;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      z-index: 100;
      font-size: 1rem;
      min-width: 150px;
      text-align: center;
    }

    main {
      padding: 2rem 1rem;
      max-width: 1100px;
      width: 100%;
      flex-grow: 1;
    }

    h2 {
      color: #b34766;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      font-weight: 700;
    }

    /* Antes e depois (before-after) */
    .before-after {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .before-after div {
      background: #fff0f3;
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 0 2px 8px rgba(179, 71, 102, 0.2);
      text-align: center;
      transition: transform 0.3s ease;
    }
    .before-after div:hover {
      transform: translateY(-5px);
    }

    .emoji {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
      display: block;
    }

    .before-after img {
      width: 100%;
      height: auto;
      max-width: 400px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      margin-top: 0.5rem;
      object-fit: cover;
    }

    /* História */
    .story {
      max-width: 800px;
      margin: 0 auto 3rem auto;
      padding: 0 1rem;
      font-size: 1.125rem;
      text-align: center;
      color: #555;
    }

    /* Como ajudar */
    .how-to-help {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .how-to-help div {
      background: #ffe6ec;
      padding: 1.5rem 1rem;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      text-align: center;
      transition: box-shadow 0.3s ease;
    }
    .how-to-help div:hover {
      box-shadow: 0 4px 15px rgba(179, 71, 102, 0.4);
    }

    .how-to-help h3 {
      margin-bottom: 0.5rem;
      color: #b34766;
      font-weight: 700;
      font-size: 1.25rem;
    }
    .how-to-help p {
      margin: 0;
      font-size: 1rem;
      color: #444;
    }

    /* Evolução da Obra */
    .obra {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-bottom: 3rem;
    }
    .obra img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      object-fit: cover;
      transition: transform 0.3s ease;
      cursor: pointer;
    }
    .obra img:hover {
      transform: scale(1.05);
    }

    /* Galeria */
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-bottom: 3rem;
    }
    .gallery img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      object-fit: cover;
      transition: transform 0.3s ease;
      cursor: pointer;
    }
    .gallery img:hover {
      transform: scale(1.05);
    }

    /* Lista de Presentes */
    .gifts {
      margin-bottom: 3rem;
    }

    .gift-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .gift-item {
      background: #fff;
      padding: 1.5rem 1rem;
      border-radius: 12px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      text-align: center;
      transition: box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .gift-item:hover {
      box-shadow: 0 6px 20px rgba(179, 71, 102, 0.35);
    }

    .gift-item img {
      width: 100%;
      max-width: 200px;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      margin-bottom: 1rem;
      object-fit: cover;
    }

    .gift-item h3 {
      margin: 0 0 0.5rem 0;
      color: #b34766;
      font-weight: 700;
      font-size: 1.25rem;
    }

    .gift-item p {
      margin: 0 0 1rem 0;
      font-weight: 600;
      color: #444;
      font-size: 1.1rem;
    }

    .gift-item button {
      background: #b34766;
      color: white;
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: background-color 0.3s ease;
      margin-top: auto;
    }

    .gift-item button:hover {
      background: #8c2f4d;
    }

    /* Barra de progresso */
    .progress-container {
      background: #f3d9e0;
      border-radius: 12px;
      padding: 6px;
      margin-top: 1.5rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .progress-bar {
      background: #b34766;
      height: 40px;
      border-radius: 12px;
      width: 0;
      color: white;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: width 1s ease;
      font-size: 1.125rem;
      user-select: none;
    }

    /* Ícone música fixo */
    #music-icon {
      position: fixed;
      bottom: 20px;
      left: 20px;
      font-size: 2.8rem;
      cursor: pointer;
      z-index: 100;
      user-select: none;
      transition: transform 0.3s ease;
    }
    #music-icon:hover {
      transform: scale(1.2);
    }

    /* Footer */
    footer {
      background:
    /* Footer */
    footer {
      background: #f8dce2;
      padding: 1.5rem 1rem;
      text-align: center;
      color: #b34766;
      margin-top: 2rem;
      border-top: 2px solid #b34766;
      font-size: 0.9rem;
      flex-shrink: 0;
    }

    footer p {
      margin: 0.3rem 0;
      word-break: break-word;
    }

    /* Responsividade geral */
    @media (max-width: 600px) {
      header h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      #contador {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        min-width: auto;
        right: 10px;
        top: 10px;
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
        <img src="inicio.png" alt="Início de um sonho" />
      </div>
      <div>
        <span class="emoji">🍽️🛋️🌿</span>
        <h2>Deu tudo certo</h2>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Deu tudo certo" />
      </div>
    </section>

    <section class="story">
      <h2>História</h2>
      <p>
        Aqui vai o texto contando a sua trajetória até este momento especial. Pode ser algo emocionante, divertido e íntimo para compartilhar apenas com amigos e familiares próximos ❤️.
      </p>
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

    <section class="gifts">
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

  <div id="music-icon" title="Tocar música">🎵</div>

  <footer>
    <p>Chave PIX: <strong>(11) 97578-0421</strong></p>
    <p>Endereço: Rua das Gardênias, 25, apto 61 - Mirandólis - São Paulo</p>
  </footer>

  <script>
    const objetivo = 3000;
    let arrecadado = 1200;
    const progressBar = document.getElementById('progress-bar');

    function updateProgress() {
      let percent = Math.min((arrecadado / objetivo) * 100, 100);
      progressBar.style.width = percent + '%';
      progressBar.textContent = `R$${arrecadado} / R$${objetivo} (${percent.toFixed(0)}%)`;
    }
    updateProgress();

    const targetDate = new Date("Dec 31, 2025 00:00:00").getTime();
    const contador = document.getElementById('contador');

    setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        contador.textContent = "Evento encerrado!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      contador.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s para o grande dia!`;
    }, 1000);

    // Exemplo de interação para o ícone da música
    const musicIcon = document.getElementById('music-icon');
    let musicOn = false;

    musicIcon.addEventListener('click', () => {
      musicOn = !musicOn;
      alert(musicOn ? "Música ativada 🎵" : "Música pausada ⏸️");
      // Aqui você pode adicionar lógica para tocar/pausar uma música real
    });
  </script>
</body>
</html>

