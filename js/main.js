
const dados = {
  "certificates": [
      {
          "id": 1,
          "titulo": "Iniciante em programação",
          "descricao": "Curso para iniciar o aprendizado em programação",
          "imagem": "http://127.0.0.1:5502/assets/certificado1.png",
          "alt": "Certificado de Iniciante em Programação",
          "categoria":"Lógica"
        },
        {
          "id": 2,
          "titulo": "HTML e CSS",
          "descricao": "Curso voltado para o aprendizado de HTML e CSS",
          "imagem": "http://127.0.0.1:5502/assets/certificado2.png",
          "alt": "Certificado de HTML e CSS",
          "categoria":"HTML"
        },
        {
          "id": 3,
          "titulo": "Javascript: Manipulando o DOM",
          "descricao": "Ensinamentos de como manipular o Document Object Model.",
          "imagem": "http://127.0.0.1:5502/assets/certificado3.png",
          "alt": "Certificado de formação em JS manipulando DOM",
          "categoria": "Javascript"
        },
        {
          "id": 4,
          "titulo": "Git e Github: Controle e compatilhe seu código.",
          "descricao": "Curso de Git para praticar o compartilhamento de código.",
          "imagem": "http://127.0.0.1:5502/assets/certificado4.png",
          "alt": "Certificado de formação em GIT e Github",
          "categoria": "GIT"
        },
        {
          "id": 5,
          "titulo": "Programação a Orientação a Objeto",
          "descricao": "Curso para aprender sobre O.O. em JS.",
          "imagem": "http://127.0.0.1:5502/assets/certificado5.png",
          "alt": "Certificado de Orientação a Objeto em JS",
          "categoria": "Javascript"
        },
        {
          "id": 6,
          "titulo": "Javascript para Web: Crie páginas dinâmicas.",
          "descricao": "Aprendendo a sair das páginas estáticas para trabalhar com páginas dinâmicas.",
          "imagem": "http://127.0.0.1:5502/assets/certificado6.png",
          "alt": "Certificado de Criação de Página Web com Javascript",
          "categoria": "Javascript"
        },
        {
          "id": 7,
          "titulo": "Git e Github: Repositórios, Commit e Versões",
          "descricao": "Praticando commits e criando repositórios. ",
          "imagem": "http://127.0.0.1:5502/assets/certificado7.png",
          "alt": "Certificado de Git e Github",
          "categoria": "GIT"
        },
        {
          "id": 8,
          "titulo": "Javascript: Armazenando dados no navegador.",
          "descricao": "Curso trabalhado para aplicação de salvamento de dados no navegador.",
          "imagem": "http://127.0.0.1:5502/assets/certificado8.png",
          "alt": "Certificado de Armazenamento de dados no Navegador",
          "categoria": "Javascript"
        },
        {
          "id": 9,
          "titulo": "Javascript: Validação e reconhecimento de voz.",
          "descricao": "Aprendendo recursos da linguagem.",
          "imagem": "http://127.0.0.1:5502/assets/certificado9.png",
          "alt": "Certificado de Validação e Reconhecimento de Voz com Javascript",
          "categoria": "Javascript"

        },
        {
          "id": 10,
          "titulo": "Javascript: Consumindo e tratando dados de uma API.",
          "descricao": "Aplicando o consumo de uma API.",
          "imagem": "http://127.0.0.1:5502/assets/certificado10.png",
          "alt": "Certificado Consumindo e tratando dados de uma API com Javascript",
          "categoria": "Javascript"

        }   
  ]
}

for(let certificate of dados.certificates) {
  const certificates = document.getElementById("certificates");
  certificates.innerHTML = `
  <section class="certificados" id="certificates">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/certificado1.png" class="d-block w-100" alt="Certificado de Iniciante em Programação">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado2.png" class="d-block w-100" alt="Certificado de HTML e CSS">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado3.png" class="d-block w-100" alt="Certificado de formação em JS manipulando DOM">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado4.png" class="d-block w-100" alt="Certificado de formação em GIT e Github">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado5.png" class="d-block w-100" alt="Certificado de Orientação a Objeto em JS">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado6.png" class="d-block w-100"
                alt="Certificado de Criação de Página Web com Javascript">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado7.png" class="d-block w-100" alt="Certificado de Git e Github">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado8.png" class="d-block w-100" alt="Certificado de Armazenamento de dados no Navegador">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado9.png" class="d-block w-100"
                alt="Certificado de Validação e Reconhecimento de Voz com Javascript">
            </div>
            <div class="carousel-item">
              <img src="assets/certificado10.png" class="d-block w-100"
                alt="Certificado Consumindo e tratando dados de uma API com Javascript">
            </div>
          </div>
          <div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
  `
  
  
}



