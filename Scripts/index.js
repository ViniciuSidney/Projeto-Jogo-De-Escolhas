const texto = document.getElementById("text-box");
const button1 = document.getElementById("escolha-1");
const button2 = document.getElementById("escolha-2");

let caminho = 0;

const historia = {
  [0]: {
    texto: "Você está em um campo aberto<br>a sua esquerda há uma floresta<br>a sua direita há um rio<br>Para onde você vai?",
    escolha1: "Ir a Floresta",
    escolha2: "Ir ao Rio",
  },
  [0.01]: {
    texto: "Você foi até a floresta",
    escolha1: "Legal",
    escolha2: "Impressionante",
  },
  [1]: {
    texto: "Você achou o Rio",
    escolha1: "Muito top",
    escolha2: "Aí sim em",
  },
};

function changeTexts(c) {
  texto.innerHTML = historia[c].texto;
  button1.innerHTML = historia[c].escolha1;
  button2.innerHTML = historia[c].escolha2;
}

changeTexts(0);

button1.onclick = function () {
  caminho += 0.01;
  changeTexts(caminho);
};

button2.onclick = function () {
  caminho += 1;
  changeTexts(caminho);
};
