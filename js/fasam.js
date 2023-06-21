const fasam = {
    imagem: "/assets/fasam.png",
    titulo: "Curso de Gestão de Pessoas",
    alt: "Logo da Faculdade Sul-Americana ",
    categoria:"Formação"

}

const logoFasam = document.querySelector(".formacao__fasam");
logoFasam.innerHTML = `
        <div class="curso__fasam">
            <h2 class="certificados__titulo">${fasam.titulo}</h2>

            <img src="${fasam.imagem}" class="img-fluid imagem__fasam" alt="${fasam.alt}">

        </div>
        <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button descricao__fasam" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Descrição
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong class="texto__fasam">Formação em Gestão de Pessoas, capacitando-me com conhecimento
                                teórico
                                e prático para realização de trabalhos em equipe, montando estratégias de execução
                                para o cumprimento de metas e prazos. </strong>
                        </div>
                    </div>
                </div>
        </div>

`

