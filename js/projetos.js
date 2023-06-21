const imagensProjetos = document.querySelector(".carrossel__projetos");

imagensProjetos.innerHTML = `
  <section id="projetos" class="carrossel__projetos">

  <div>
            <h2 class="projetos">Projects</h2>
        </div>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="4000">
        <img src="assets/curriculo.png" class="d-block w-100" alt="Curriculo desenvolvido com HTML e CSS">
        <p class="descricao__projeto">Curriculo criado com a utilização de HTML, CSS e Javascript. Nele trabalho
          background, funções JS e listas.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/barbearia.png" class="d-block w-100" alt="Site para barbearia">
        <p class="descricao__projeto">Site desenvolvido para antender clientes de uma barbearia. Com ele foi
          trabalhado HTML, CSS e aplicação de API.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/jogo1.png" class="d-block w-100" alt="Jogo de atravessia de rua">
        <p class="descricao__projeto">Jodo desenvolvido no site P5JS. Com ele foi trabalhado a lógica de programação
          utilizando Javascript.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/jogo3.png" class="d-block w-100" alt="Jogo de adivinhação do número sorteado">
        <p class="descricao__projeto">Jogo de sorteio numeral. Curso realizado para aprendizado de Javascript e sua
          aplicação do comando de voz.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/arrays.png" class="d-block w-100" alt="Projeto de desenvolvido com arrays">
        <p class="descricao__projeto">Site da Alura com seus valores de cursos e suas promoções. Projeto
          desenvolvido
          para trabalhar com ARRAY em Javascript.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/flexbox.png" class="d-block w-100" alt="Curso feito para posicionamento de elementos">
        <p class="descricao__projeto">Site de divulgação de cursos. Projeto específico de Flexbox, desenvolvido para
          praticar posicionamento de elementos.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/flix.png" class="d-block w-100" alt="...">
        <p class="descricao__projeto">Projeto desenvolvido com a intenção de replicar o site da Alura+. Nesse
          trabalho
          foi utilizado HTML e CSS.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/validacao.png" class="d-block w-100" alt="Site de cadastro">
        <p class="descricao__projeto">Site para cadastro de dados. Desenvolvido para o aprendizado de aplicação de
          API
          para validação de dados.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/geek.png" class="d-block w-100" alt="Site de venda">
        <p class="descricao__projeto">Site de vendas de produtos. Projeto desenvolvido para praticar HTML e CSS
          utilizando layout existe no FIGMA. </p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/midi.png" class="d-block w-100" alt="Site de intrumento musical desenvolvido em JS">
        <p class="descricao__projeto">Jogo de reprodução de sons. Projeto para trabalhar com JS manipulando o DOM, e
          adicionar interação do usuário.</p>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="assets/jogo2.png" class="d-block w-100" alt="Jogo de raquetes">
        <p class="descricao__projeto">Jogo desenvolvido para praticar lógica de programação utiliando comandos de
          Javascript como funções.</p>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
</section>
`