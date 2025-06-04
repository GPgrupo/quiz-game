
listaPerguntas = [
{
  pergunta: "Qual o maior ser vivo?",
  opcoes : [
    "Baleia azul",
    "Fungo de Mel",
    "Elefante",
    "Girafa"
  ],
  correta: 1
}, 
{
  pergunta: "Qual a primeira capital do Brasil",
  opcoes : [
    "Taquara",
    "Brasilia",
    "Salvador",
    "Rio de Janeiro"
  ],
  correta: 2 
},
{
  pergunta: "Em que ano o Brasil ganhou sua segunda Copa do Mundo",
  opcoes : [
    "1974",
    "1970",
    "1966",
    "1962"
  ],
  correta: 3
}
]

pergunta = null

btninciar = document.querySelector(".iniciar")
btninciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telapeg = document.querySelector(".tela-pergunta")
  telapeg.style.display = "block"

mostraPergunta()
}

function mostraPergunta() {
  pergunta = listaPerguntas[0]
  
  console.log(pergunta.correta)
}