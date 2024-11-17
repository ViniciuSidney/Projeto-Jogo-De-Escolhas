
const texto = document.getElementById("text-box")
const button1 = document.getElementById("escolha-1")
const button2 = document.getElementById("escolha-2")

const caminho = {
  [1]:{
      texto:"Bom dia! E ai?", 
      escolha1:"E ai não, a gente não era um time?",
      escolha2:"Opa, e ai!"
  },
  [1.1]:{
    texto:"Oloco, mano, como assim? kk", 
    escolha1:"Sei lá, só falei kk é meme",
    escolha2:"esquece kk"
  },
  [2]:{
    texto:"Tranquilo? Bora jogar uns game?", 
    escolha1:"Eu não, oxi, nem te conheço brother",
    escolha2:"Opa, bora! Quais games?"
  },
}

texto.innerHTML = caminho[1].texto;
button1.innerHTML = caminho[1].escolha1;
button2.innerHTML = caminho[1].escolha2;

button1.onclick = function(){
  texto.innerHTML = caminho[1.1].texto;
  button1.innerHTML = caminho[1.1].escolha1;
  button2.innerHTML = caminho[1.1].escolha2;
}

button2.onclick = function(){
  texto.innerHTML = caminho[2].texto;
  button1.innerHTML = caminho[2].escolha1;
  button2.innerHTML = caminho[2].escolha2;
}