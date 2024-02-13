fetch("../js/certificates.json")
  .then((response) => response.json())
  .then((data) => {
    const certificates = document.getElementById("container__certificates");
    const divSubtitle = document.createElement("div");
    const subtitle = document.createElement("h2");
    const containerCarousel = document.createElement("div");
    const carouselInner = document.createElement("div");

    subtitle.classList.add("container__title");
    subtitle.textContent = "Course Certificates";
    containerCarousel.classList.add("carousel", "slide");
    containerCarousel.setAttribute("data-bs-ride", "carousel");
    containerCarousel.id = "carouselExampleAutoplaying";
    carouselInner.classList.add("carousel-inner");

    divSubtitle.appendChild(subtitle);
    certificates.appendChild(divSubtitle);
    certificates.appendChild(containerCarousel);
    containerCarousel.appendChild(carouselInner);

    data.certificates.forEach((element, index) => {
      const divImage = document.createElement("div");
      const image = document.createElement("img");

      if (index === 0) {
        divImage.classList.add("carousel-item", "active");
      } else {
        divImage.classList.add("carousel-item");
      }

      image.classList.add("d-block", "w-100" , "certificate-image");
      image.src = element.certificate;
      image.alt = element.alt;

      divImage.appendChild(image);
      carouselInner.appendChild(divImage);
      containerCarousel.appendChild(carouselInner);
    });

    certificates.appendChild(containerCarousel);
    const divButton = document.createElement("div");
    divButton.innerHTML = `
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

    containerCarousel.appendChild(divButton);
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
