const fasam = {
  image: "/assets/image/fasam.png",
  title: "Human Resources Management Course",
  alt: "Logo da Faculdade Sul-Americana ",
  category: "Formação",
};

const fasamContainer = document.querySelector(".fasam__course");

// Adicionando o título e a image


const divTitleAndImage = document.createElement("div");
divTitleAndImage.classList.add("course__fasam");
const title = document.createElement("h2");
title.classList.add("certificates__title");
title.innerHTML = `${fasam.title}`;
const image = document.createElement("img");
image.classList.add("img-fluid", "image__fasam");
image.src = `${fasam.image}`;
image.alt = `${fasam.alt}`;

divTitleAndImage.appendChild(title);
divTitleAndImage.appendChild(image);
fasamContainer.appendChild(divTitleAndImage);

// Creating the accordion structure

const divAccordion = document.createElement("div");
divAccordion.id = "accordionPanelsStayOpenExample";
divAccordion.classList.add("accordion");

const divAccordionItem = document.createElement("div");
divAccordionItem.classList.add("accordion-item");

const titleButton = document.createElement("h2");
titleButton.classList.add("accordion-header");

const buttonAccordion = document.createElement("button");
buttonAccordion.classList.add("accordion-button");
buttonAccordion.setAttribute("type", "button");
buttonAccordion.setAttribute("data-bs-toggle", "collapse");
buttonAccordion.setAttribute("data-bs-target", "#panelsStayOpen-collapseOne");
buttonAccordion.setAttribute("aria-expanded", "true");
buttonAccordion.setAttribute("aria-controls", "panelsStayOpen-collapseOne");
buttonAccordion.innerText = "Info about my course";

const divCollapse = document.createElement("div");
divCollapse.id = "panelsStayOpen-collapseOne";
divCollapse.classList.add("accordion-collapse", "collapse", "show");

titleButton.appendChild(buttonAccordion);
divAccordionItem.appendChild(titleButton);
divAccordionItem.appendChild(divCollapse);
divAccordion.appendChild(divAccordionItem);
fasamContainer.appendChild(divAccordion);

// Adding collapse content on button click

const btnAccordion = document.querySelector('.accordion-button')
btnAccordion.addEventListener('click', () => {
    const accordionCollapse = document.querySelector('.accordion-collapse')
    accordionCollapse.innerHTML = `
            <div class="accordion-body">
                <p>Human Resources Management Course at South American College.
                     With this background, I gained knowledge in quality control, personnel management, teamwork, planning,
                    and strategy development, making me capable of meeting deadlines and handling projects.      
                </p>
            </div>
    `
})

