const button = document.querySelector(".button__whoIAm");
button.addEventListener("click" , aboutMe);
const age = 35;
const myName = "Wellington Junior";

function aboutMe(){
    const aboutMe = document.querySelector(".presentation__whoIAm");
    aboutMe.innerHTML= `
    <style>
        .fechar {
            color: var(--color-principal);
            text-transform: uppercase;
            border-color: var(--borda-itens);
            border-width: 3px;
            display:flex;
        }

        .fechar:hover {
            color: #FFF;
            border-color: #FFF;
            background-color: var(--borda-itens);
        }

        .fechar__botao {
            position: absolut;
        }

        .texto__quem-sou{
            color: var(--textos);
        }
        
    </style>
    <div class="fechar__botao">
        <p class="texto__quem-sou">Hello, my name is ${myName}, I am Brazilian and I'm
        ${age} old. I have a degree in People Management and today I am in a career transition to the technology area.
       I am a Frontend Developer, and have knowledge in <span style="font-size: 20px; color: #4d54e7;">HTML, CSS, Javascript, Bootstrap, Git, Github, Node.js, React JS. </span><br>
       I have experience with document control, typing, production, teamwork, attention to
       deadlines for delivery of products and communication.
       I leave my <a href="https://www.github.com/Wellington2708" target="_blank"> Github Here </a> to better demonstrate my work.<br>
       Welcome to my portfolio.  </p>
        <button type="button" onclick="fechar()" class="btn btn-outline-warning fechar">Fechar</button>
    </div>
    `
}


function fechar(){
    const fechar = document.querySelector(".fechar__botao")
    fechar.innerHTML = `
    <div class="presentation__whoIAm">
        <button type="button" onclick="aboutMe()"  class="btn btn-outline-warning button__whoIAm">About Me</button>

    </div>    
    `
    
    
}

