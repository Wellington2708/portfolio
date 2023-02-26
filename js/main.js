var botao = document.querySelector(".botao__quem-sou");
botao.addEventListener("click" , sobreMim);

function sobreMim(){
    var sobreMim = document.querySelector(".quem__sou");
    sobreMim.innerHTML= `
    <style>
        .fechar {
            color: var(--hover);
        }

        .fechar__botao {
            width: 100vw;
            margin-top: 1em;
            text-align: center;
        }

        .texto__quem-sou{
            color: var(--textos);
        }
        
    </style>
    <div class="fechar__botao">
        <p class="texto__quem-sou">Olá, meu nome é Wellington Junior,sou natural de Goiânia - Goiás e formado em Gestão de Pessoas. 
        Tenho 34 anos e decidi migrar para a área de tecnologia. <br>
        Venho preparando-me para ser um Desenvolvedor Front-End aprendendo diariamente com teoria e prática.
        Prática essa que me leva a desenvolver projetos utilizando, por enquanto, HTML, CSS e Javascript.<br>
        <button type="button" onclick="fechar()" class="btn btn-outline-warning fechar">Fechar</button>
    </div>
    `
}


function fechar(){
    var fechar = document.querySelector(".fechar__botao")
    fechar.innerHTML = `
    <div class="quem__sou">
        <button type="button" onclick="sobreMim()"  class="btn btn-outline-warning botao__quem-sou">Sobre Mim</button>

    </div>    
    `
    
    
}

