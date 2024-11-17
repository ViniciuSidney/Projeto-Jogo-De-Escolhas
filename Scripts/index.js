const texto = document.getElementById("text-box");
const button1 = document.getElementById("escolha-1");
const button2 = document.getElementById("escolha-2");

let caminho;

const historia = {
  [0]: {
    texto: "Você está em um campo aberto<br>a sua esquerda há uma floresta<br>a sua direita há um rio<br>Para onde você vai?",
    escolha1: "Ir a Floresta",
    escolha1function: "floresta-1",
    escolha2: "Ir ao Rio",
    escolha2function: "rio-1",
  },
  ["floresta-1"]: {
    texto: "Você foi até a floresta",
    escolha1: "Comer maçãs",
    escolha1function: "maçã-1",
    escolha2: "Pegar gravetos",
    escolha2function: "gravetos-1",
  },
  ["rio-1"]: {
    texto: "Você achou o Rio",
    escolha1: "Beber água",
    escolha1function: "água-1",
    escolha2: "Nadar no rio",
    escolha2function: "nadar-1",
  },
};

function changeTexts(c) {
  texto.innerHTML = historia[c].texto;
  button1.innerHTML = historia[c].escolha1;
  button2.innerHTML = historia[c].escolha2;
}

changeTexts(0);

button1.onclick = function () {
  changeTexts(caminho);
};

button2.onclick = function () {
  caminho += 1;
  changeTexts(caminho);
};
