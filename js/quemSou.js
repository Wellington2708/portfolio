let tecnologias = {
    markup: 'HTML',
    style : 'CSS',
    language : 'Javascript',
    frameworkCss : 'Bootstrap',

}

let botao = document.querySelector(".botao__quem-sou");
botao.addEventListener("click" , sobreMim);
let idade = 34;
let nome = "Wellington Junior";

function sobreMim(){
    let sobreMim = document.querySelector(".apresentacao__quem__sou");
    sobreMim.innerHTML= `
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
        <p class="texto__quem-sou"><b>   Olá, meu nome é ${nome}, sou natural de Goiânia - Goiás e formado em Gestão de Pessoas. 
        Tenho ${idade} anos e estou migrando para a área de tecnologia. <br>
        Venho preparando-me para ser um Desenvolvedor Front-End, aprendendo diariamente com a conclusão de cursos e exercícios práticos.
            Prática essa que me capacitou a desenvolver projetos como esse, utilizando ${tecnologias.markup}, ${tecnologias.style} com o framework ${tecnologias.frameworkCss} e a linguagem de programação ${tecnologias.language}.<br>
            Procurarei aprender ainda mais para incluir novas funcionalidades ao projeto. </b>
        <button type="button" onclick="fechar()" class="btn btn-outline-warning fechar">Fechar</button>
    </div>
    `
}


function fechar(){
    let fechar = document.querySelector(".fechar__botao")
    fechar.innerHTML = `
    <div class="apresentacao__quem__sou">
        <button type="button" onclick="sobreMim()"  class="btn btn-outline-warning botao__quem-sou">Sobre Mim</button>

    </div>    
    `
    
    
}

