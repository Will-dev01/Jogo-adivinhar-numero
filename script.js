let numeroSecreto = Math.floor(Math.random() * 100)
let palpitesMaior = 0;
let palpitesMenor = 0;
let quantidadeResposta = 0;
let soma = 0;



function jogar() {
    

    let campoInput = document.getElementById("campoPalpite");
    let palpite = parseInt(campoInput.value);

    let areaMensagem = document.getElementById("menssagemResultado");
    let historico = document.getElementById("historicoPalpites")

    quantidadeResposta += 1;
    soma += palpite;

    if(palpite === numeroSecreto){

        areaMensagem.innerText = "Você acertou! Parabéns!";
        areaMensagem.style.color = "green";
        historico.innerHTML += "<p style = 'color: green;'> Acertou com o número " + palpite + "</p>";
        historico.innerHTML += "<hr>"; 
        historico.innerHTML += "<p><strong>Estatísticas:</strong></p>";
        historico.innerHTML += "<p>Tentativas necessárias: " + quantidadeResposta + "</p>";
        historico.innerHTML += "<p>Tentativas maiores: " + palpitesMaior + "</p>";
        historico.innerHTML += "<p>Tentativas menores: " + palpitesMenor + "</p>";
        document.getElementById("telaVitoria").classList.remove("escondido");
        
    } else if (palpite > numeroSecreto){

        areaMensagem.innerText = "Você errou, o número é mais baixo!";
        areaMensagem.style.color = "red";
        historico.innerHTML += "<p>Palpite " + palpite + " - O número secreto é menor </p>";
        palpitesMaior += 1;

    } else {

        areaMensagem.innerText = "Você errou, o número é mais alto!";
        areaMensagem.style.color = "red";
        historico.innerHTML += "<p> Palpite " + palpite + " - O  número secreto é maior</p>";
        palpitesMenor += 1;
    }

    campoInput.value = "";
    campoInput.focus();
}

document.getElementById("botaoTentar").addEventListener("click", jogar);

function reiniciarJogo() {
    window.location.reload();
}
document.getElementById("jogarNovamente").addEventListener("click", reiniciarJogo);
