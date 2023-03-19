const fasam = {
    imagem: "/assets/fasam.png",
    titulo: "Logo da Fasam",
    alt: "Logo da Faculdade Sul-Americana ",
    categoria:"Formação"

}

const logoFasam = document.querySelector(".formacao__fasam");
logoFasam.innerHTML = `
    <div class="curso__fasam">
    <h2 class="certificados__titulo">Curso de Gestão de Pessoas</h2>

    <img src="${fasam.imagem}" class="img-fluid imagem__fasam" alt="Logo da Faculdade Sul-Americana">

    </div>
`

console.log(logoFasam);