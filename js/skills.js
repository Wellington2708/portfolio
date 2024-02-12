fetch("../js/certificados.json")
  .then((response) => response.json())
  .then((data) => {
    const skills = document.getElementById("skills");
    const divSubtitulo = document.createElement("div");
    const subtitulo = document.createElement("h2");
    const containerCarrossel = document.createElement("div");
    const carrosselInner = document.createElement("div");

    subtitulo.classList.add("container__title");
    subtitulo.textContent = "Skills";
    containerCarrossel.classList.add("carousel", "slide");
    containerCarrossel.setAttribute("data-bs-ride", "carousel");
    containerCarrossel.id = "carouselExampleAutoplaying";
    carrosselInner.classList.add("carousel-inner");

    divSubtitulo.appendChild(subtitulo);
    skills.appendChild(divSubtitulo);
    skills.appendChild(containerCarrossel);
    containerCarrossel.appendChild(carrosselInner);

    data.certificates.forEach((element, index) => {
      const divImagem = document.createElement("div");
      const image = document.createElement("img");

      if (index === 0) {
        divImagem.classList.add("carousel-item", "active");
      } else {
        divImagem.classList.add("carousel-item");
      }

      image.classList.add("d-block", "w-100");
      image.src = element.imagem;
      image.alt = element.alt;

      divImagem.appendChild(image);
      carrosselInner.appendChild(divImagem);
      containerCarrossel.appendChild(carrosselInner);
    });

    skills.appendChild(containerCarrossel);
    const divBotoes = document.createElement("div");
    divBotoes.innerHTML = `
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> `;

    containerCarrossel.appendChild(divBotoes);
  })
  .catch((error) => {
    console.error("Erro ao carregar o JSON:", error);
  });
