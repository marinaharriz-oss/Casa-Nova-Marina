
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Chá de Casa Nova da Marina</title>
<style>
  /* Reset básico */
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    background: #fffafc;
    color: #4a4a4a;
    line-height: 1.6;
  }
  header {
    background: #b34766;
    color: white;
    padding: 1.5rem 1rem;
    text-align: center;
  }
  header h1 {
    margin: 0;
    font-weight: 700;
    font-size: 2.5rem;
  }
  main {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  section {
    margin-bottom: 3rem;
  }
  h2 {
    text-align: center;
    color: #b34766;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .before-after {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .before-after div {
    flex: 1 1 300px;
    text-align: center;
  }
  .before-after img {
    width: 100%;
    max-width: 350px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    margin-top: 0.5rem;
  }
  .emoji {
    font-size: 2.5rem;
  }
  .story p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
  }
  .how-to-help {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 1rem;
    text-align: center;
  }
  .how-to-help div {
    background: #ffe6ec;
    padding: 1.25rem;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(179,71,102,0.2);
    transition: background-color 0.3s ease;
  }
  .how-to-help div:hover {
    background-color: #f8d1db;
  }
  .how-to-help h3 {
    margin-bottom: 0.5rem;
    color: #b34766;
  }
  .gallery, .obra, .gift-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 1rem;
  }
  .gallery img, .obra img, .gift-item img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.15);
    object-fit: cover;
  }
  .gift-item {
    background: white;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    text-align: center;
  }
  .gift-item h3 {
    margin: 0.75rem 0 0.25rem;
    color: #b34766;
  }
  .gift-item p {
    margin: 0.25rem 0 1rem;
    font-weight: 600;
  }
  .gift-item button {
    background: #b34766;
    color: white;
    border: none;
    padding: 0.6rem 1.25rem;
    border-radius: 8px;
    font-weight: 600;
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
    margin-top: 1.5rem;
  }
  .progress-bar {
    background: #b34766;
    height: 40px;
    border-radius: 12px;
    width: 0;
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 1s ease;
  }
  #pix-section {
    text-align: center;
    margin-top: 3rem;
  }
  #qrcode {
    margin: 1rem auto;
    width: 180px;
    height: 180px;
  }
  footer {
    background: #b34766;
    color: white;
    text-align: center;
    padding: 1rem 1rem;
    font-size: 0.9rem;
  }
  footer p {
    margin: 0.3rem 0;
  }

  @media(max-width: 480px) {
    header h1 {
      font-size: 1.8rem;
    }
    .emoji {
      font-size: 2rem;
    }
  }
</style>
</head>
<body>

<header>
  <h1>Chá de Casa Nova da Marina</h1>
</header>

<main>

  <section class="before-after" aria-label="Início e progresso da casa">
    <div>
      <span class="emoji" aria-label="Casa, presente e limpeza">🏠🎁🧹</span>
      <h2>Início de um sonho</h2>
      <img src="images/inicio.png" alt="Foto do início da casa nova" />
    </div>
    <div>
      <span class="emoji" aria-label="Mesa posta, sofá e plantas">🍽️🛋️🌿</span>
      <h2>Deu tudo certo</h2>
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Casa pronta e decorada" />
    </div>
  </section>

  <section class="story" aria-label="História">
    <h2>História</h2>
    <p>
      <!-- Coloque aqui o texto da sua trajetória, momento especial, agradecimentos -->
      Marina e seus amigos e familiares comemoram o início dessa nova etapa com muito amor e alegria. Um sonho que virou realidade graças à dedicação e ajuda de todos!
    </p>
  </section>

  <section class="how-to-help" aria-label="Como ajudar">
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

  <section aria-label="Evolução da Obra">
    <h2>Evolução da Obra</h2>
    <div class="obra">
      <img src="https://images.unsplash.com/photo-1581091870622-3d7b1bb0e6b0?auto=format&fit=crop&w=600&q=80" alt="Etapa 1 da obra" />
      <img src="https://images.unsplash.com/photo-1581090700227-4c4f8d5d3a3b?auto=format&fit=crop&w=600&q=80" alt="Etapa 2 da obra" />
      <img src="https://images.unsplash.com/photo-1600585154209-c3a1e8c6bb25?auto=format&fit=crop&w=600&q=80" alt="Etapa 3 da obra" />
    </div>
  </section>

  <section aria-label="Galeria">
    <h2>Galeria</h2>
    <div class="gallery">
      <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Foto 1" />
      <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" alt="Foto 2" />
      <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" alt="Foto 3" />
    </div>
  </section>

  <section aria-label="Lista de presentes e cotas">
    <h2>Lista de Presentes / Cotas</h2>
    <div class="gift-grid">
      <div class="gift-item">
        <img src="https://images.unsplash.com/photo-1586201375761-83865001e17d?auto=format&fit=crop&w=600&q=80" alt="Liquidificador" />
        <h3>Liquidificador</h3>
        <p>R$150</p>
        <button onclick="alert('Contribua com R$150 via PIX! Chave: 1197578-0421')">Contribuir</button>
      </div>
      <div class="gift-item">
        <img src="https://images.unsplash.com/photo-1617196039897-7e1c2c9b472b?auto=format&fit=crop&w=600&q=80" alt="Jogo de Panelas" />
        <h3>Jogo de Panelas</h3>
        <p>R$300</p>
        <button onclick="alert('Contribua com R$300 via PIX! Chave: 1197578-0421')">Contribuir</button>
      </div>
    </div>
  </section>

  <section aria-label="Progresso da geladeira">
    <h2>Ajudando a Marina a conquistar a geladeira dos sonhos</h2>
    <div class="progress-container">
      <div class="progress-bar" id="progress-bar">0%</div>
    </div>
  </section>

  <section id="pix-section" aria-label="Chave PIX e QR Code">
    <h2>Contribua pelo PIX</h2>
    <p>Chave PIX: <strong>1197578-0421</strong></p>
    <div id="qrcode"></div>
  </section>

</main>

<footer>
  <p>Endereço: Rua das Gardênias, 25, apto 61 - Mirandólis - São Paulo</p>
  <p>
