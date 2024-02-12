fetch("../js/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const containerProjects = document.getElementById("projects");
    const divSubtitulo = document.createElement("div");
    const subtitulo = document.createElement("h2");
    const containerCarrossel = document.createElement("div");
    const carrosselInner = document.createElement("div");

    subtitulo.classList.add("container__title");
    subtitulo.textContent = "Projects";
    containerCarrossel.classList.add("carousel", "slide");
    containerCarrossel.setAttribute("data-bs-ride", "carousel");
    containerCarrossel.id = "carouselExampleInterval";
    carrosselInner.classList.add("carousel-inner");

    divSubtitulo.appendChild(subtitulo);
    containerProjects.appendChild(divSubtitulo);
    containerProjects.appendChild(containerCarrossel);
    containerCarrossel.appendChild(carrosselInner);

    data.projects.forEach((element, index) => {
      const divImagem = document.createElement("div");
      const image = document.createElement("img");

      if (index === 0) {
        divImagem.classList.add("carousel-item", "active");
      } else {
        divImagem.classList.add("carousel-item");
      }

      image.classList.add("d-block", "w-100");
      image.src = element.src;
      image.alt = element.alt;

      divImagem.appendChild(image);
      carrosselInner.appendChild(divImagem);
      containerCarrossel.appendChild(carrosselInner);
    });
    containerProjects.appendChild(containerCarrossel);
    const divBotoes = document.createElement("div");
    divBotoes.innerHTML = `
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> `;

    containerCarrossel.appendChild(divBotoes);
  })
  .catch((error) => {
    console.error("Erro ao carregar o JSON:", error);
  });
