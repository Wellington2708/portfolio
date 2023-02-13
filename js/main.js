var botao = document.querySelector(".sobre__mim");
botao.addEventListener("click" , sobreMim);

function sobreMim(){
    var sobreMim = document.querySelector(".quem__sou");
    sobreMim.innerHTML= `
    <div class="fechar__botao">
        <p>Olá, meu nome é Wellington Junior,sou natural de Goiânia - Goiás e formado em Gestão de Pessoas. 
        Tenho <span>34</span> anos e decidi migrar para a área de tecnologia. <br>
        Venho preparando-me para ser um Desenvolvedor Front-End aprendendo diariamente com teoria e prática.
        Prática essa que me leva a desenvolver projetos utilizando, por enquanto, HTML, CSS e Javascript.<br>
        <button onclick="fechar()" class="fechar">Fechar</button>
    </div>
    `
}

//document.querySelector(".quem__sou").onclick = sobreMim;

function fechar(){
    var fechar = document.querySelector(".fechar__botao")
    fechar.innerHTML = `
    <div class="quem__sou">
        <button onclick="sobreMim()" class="sobre__mim">Sobre mim </button>
    </div>    
    `
    
    
}

