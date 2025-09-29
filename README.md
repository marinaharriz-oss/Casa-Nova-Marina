
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Chá de Casa Nova da Marina</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #fffafc;
      color: #333;
    }
    header {
      background: #f8dce2;
      padding: 20px;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2.5em;
      color: #b34766;
    }
    #contador {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #f8dce2;
      padding: 15px 20px;
      border-radius: 12px;
      font-weight: bold;
      color: #b34766;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      z-index: 100;
    }
    section {
      padding: 40px 20px;
      max-width: 1100px;
      margin: auto;
    }
    h2 {
      color: #b34766;
      text-align: center;
      margin-bottom: 20px;
    }
    .story {
      text-align: center;
      line-height: 1.6;
      margin-bottom: 40px;
    }
    .before-after {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 30px;
    }
    .before-after div {
      text-align: center;
      position: relative;
    }
    .before-after img {
      width: 100%;
      max-width: 400px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .emoji {
      font-size: 2em;
      margin-bottom: 10px;
      display: block;
    }
    .gallery, .obra, .gift-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }
    .gallery img, .obra img, .gift-item img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      object-fit: cover;
      height: 180px;
    }
    .gift-item {
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      text-align: center;
    }
    .gift-item h3 {
      margin: 10px 0 5px;
      color: #b34766;
    }
    .gift-item p {
      margin: 5px 0;
    }
    .gift-item button {
      background: #b34766;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .gift-item button:hover {
      background: #8c2f4d;
    }
    .progress-container {
      background: #f3d9e0;
      border-radius: 12px;
      padding: 5px;
      margin-top: 30px;
    }
    .progress-bar {
      background: #b34766;
      height: 35px;
      border-radius: 12px;
      width: 0;
      color: white;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: width 1s ease;
    }
    #music-icon {
      position: fixed;
      bottom: 20px;
      left: 20px;
      font-size: 2.5em;
      cursor: pointer;
      z-index: 100;
    }
    footer {
      background: #f8dce2;
      padding: 20px;
      text-align: center;
      color: #b34766;
      margin-top: 40px;
      border-top: 2px solid #b34766;
      font-size: 0.9em;
    }
    footer p {
      margin: 5px 0;
      word-break: break-word;
    }
    .how-to-help div {
      background:#ffe6ec;
      padding:20px;
      border-radius:12px;
      box-shadow:0 2px 6px rgba(0,0,0,0.2);
    }
    .how-to-help h3 {
      margin-bottom: 10px;
      color: #b34766;
    }
  </style>
</head>
<body>
  <header>
    <h1>Chá de Casa Nova da Marina</h1>
  </header>
  <div id="contador">Carregando contador...</div>
  <section>
    <div class="before-after">
      <div>
        <span class="emoji">🏠🎁🧹</span>
        <h2>Início de um sonho</h2>
        <img src="https://images.unsplash.com/photo-1505691723518-41cb1ee9d8e9?auto=format&fit=crop&w=800&q=80" alt="Início de um sonho" />
      </div>
      <div>
        <span class="emoji">🍽️🛋️🌿</span>
        <h2>Deu tudo certo</h2>
        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" alt="Deu tudo certo" />
      </div>
    </div>
    <div class="story">
      <h2>História</h2>
      <p>Aqui vai o texto contando a sua trajetória até este momento especial. Pode ser algo emocionante, divertido e íntimo para compartilhar apenas com amigos e familiares próximos ❤️.</p>
    </div>

    <section class="how-to-help" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 40px; text-align: center;">
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

    <h2>Evolução da Obra</h2>
    <div class="obra">
      <img src="https://images.unsplash.com/photo-1465548560353-cbb2b8b72ef9?auto=format&fit=crop&w=800&q=80" alt="Obra 1" />
      <img src="https://images.unsplash.com/photo-1560184897-c1f9a25a638f?auto=format&fit=crop&w=800&q=80" alt="Obra 2" />
      <img src="https://images.unsplash.com/photo-1590080877777-3c8f3ca00a7c?auto=format&fit=crop&w=800&q=80" alt="Obra 3" />
    </div>

    <h2>Galeria</h2>
    <div class="gallery">
      <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" alt="Foto 1" />
      <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Foto 2" />
      <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" alt="Foto 3" />
    </div>

    <div class="gifts">
      <h2>Lista de Presentes / Cotas</h2>
      <div class="gift-grid">
        <div class="gift-item">
          <img src="https://images.unsplash.com/photo-1501183638714-15f2d9690a77?auto=format&fit=crop&w=400&q=80" alt="Liquidificador" />
          <h3>Liquidificador</h3>
          <p>R$150</p>
          <button onclick="alert('Contribua com R$150 via PIX!')">Contribuir</button>
        </div>
        <div class="gift-item">
          <img src="https://images.unsplash.com/photo-1525059337994-c64f80d8c597?auto=format&fit=crop&w=400&q=80" alt="Jogo de Panelas" />
          <h3>Jogo de Panelas</h3>
          <p>R$300</p>
          <button onclick="alert('Contribua com R$300 via PIX!')">Contribuir</button>
        </div>
      </div>
    </div>

    <h2>Ajudando a Marina a conquistar a geladeira dos sonhos</h2>
    <div class="progress-container">
      <div class="progress-bar" id="progress-bar">0%</div>
    </div>
  </section>

  <div id="music-icon">🎵</div>

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
        contador.textContent = "O evento já aconteceu!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      contador.textContent = `Faltam ${days} dias, ${hours}h ${minutes}m ${seconds}s para o evento!`;
    }, 1000);
  </script>
</body>
</html>
