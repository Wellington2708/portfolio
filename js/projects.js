// Requesting JSON data and creating elements


fetch("../js/projects.json")
  .then((response) => response.json())
  .then((data) => {

    // creating container
    const containerProjects = document.getElementById("projects");
    const divSubtitle = document.createElement("div");
    const subtitle = document.createElement("h2");
    const containerCarousel = document.createElement("div");
    const carouselInner = document.createElement("div");

    subtitle.classList.add("container__title");
    subtitle.textContent = "Projects";
    containerCarousel.classList.add("carousel", "slide");
    containerCarousel.setAttribute("data-bs-ride", "carousel");
    containerCarousel.id = "carouselExampleInterval";
    carouselInner.classList.add("carousel-inner");

    divSubtitle.appendChild(subtitle);
    containerProjects.appendChild(divSubtitle);
    containerProjects.appendChild(containerCarousel);
    containerCarousel.appendChild(carouselInner);

    //using forEach to access data from JSON file

    data.projects.forEach((element, index, href) => {
      const divImage = document.createElement("div");
      const linkProject = document.createElement('a');
      linkProject.setAttribute('href', href);
      linkProject.setAttribute('target' , '_blank')
      
      const image = document.createElement("img");

      if (index === 0) {
        divImage.classList.add("carousel-item", "active");
      } else {
        divImage.classList.add("carousel-item");
      }

      image.classList.add("d-block", "w-100", "projects-image" );
  
      image.src = element.src;
      image.alt = element.alt;
      linkProject.href = element.href;

      linkProject.appendChild(image);

      divImage.appendChild(linkProject);
      carouselInner.appendChild(divImage);
      containerCarousel.appendChild(carouselInner);
    });

    containerProjects.appendChild(containerCarousel);

    //Creating button for navigation between images using bootstrap

    const divButton = document.createElement("div");
    divButton.innerHTML = `
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

    containerCarousel.appendChild(divButton);
  })

  //error message if it is not possible to access the JSON file data
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
