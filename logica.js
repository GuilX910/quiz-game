
botaoIniciar = document.querySelector(".iniciar")

botaoIniciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telaPergunta = document.querySelector(".tela-pergunta")
  telaPergunta.style.display = "block"
  
}

alternativa = document.querySelector(".alternativa")
alternativa.addEventListener("click", respostaCorreta)


function respostaCorreta() {
  telaPergunta = document.querySelector(".tela-pergunta")
  telaPergunta.style.display = "none"
  
  telaCorreto = document.querySelector(".tela-acertou")
  telaCorreto.style.display = "block"
}