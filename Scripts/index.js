const texto = document.getElementById("text-box");
const button1 = document.getElementById("escolha-1");
const button2 = document.getElementById("escolha-2");

const historia = {
  ["início"]: {
    texto:
      "Você está em um campo aberto e a sua esquerda há uma floresta cheia de grandes e pequenas árvores. Além da floresta, a sua direita há um rio cujo tamanho é tanto que não é possível enxergar sua foz e muito menos sua nascente.<br>Para onde você decide ir?",
    escolha1: "Ir a Floresta",
    escolha1function: "floresta-1",
    escolha2: "Ir ao Rio",
    escolha2function: "rio-1",
  },
  ["reviver"]: {
    texto:
      "Você tenta usar toda sua força interior para poder voltar a vida, mas infelizmente a vida é triste e nada é como a gente quer, então isso não funciona e você continua morto. Que pena!",
    escolha1: "Voltar ao início!",
    escolha1function: "início",
    escolha2: "Voltar ao início!",
    escolha2function: "início",
  },

  ["floresta-1"]: {
    texto:
      "Você foi até a floresta.<br>Na floresta há várias maçãs, cuja aparência é duvidosa, espalhadas pelo chão próximas a uma árvore.<br>Além das maçãs há vários gravetos de diversos tamanhos caídos das árvores próximas, poderiam ser úteis para fabricação de ferramentas.<br>O que você faz?",
    escolha1: "Comer maçãs",
    escolha1function: "maçã-1",
    escolha2: "Pegar gravetos",
    escolha2function: "gravetos-1",
  },
  ["maçã-1"]: {
    texto:
      "Você comeu uma das maçãs que estavam no chão.<br>Como foi dito anteriomente, elas estavam com uma aparência suspeita. Infelizmente a que você escolheu comer estava realmente podre, especialmente por dentro.<br>Você morreu!",
    escolha1: "Voltar ao início!",
    escolha1function: "início",
    escolha2: "Tentar reviver!",
    escolha2function: "reviver",
  },
  ["gravetos-1"]: {
    texto:
      "Ao chegar perto dos gravetos, você para por alguns segundos enquanto os observa, esse pequeno tempo foi suficente para você perceber que você não fazia a menor ideia do que fazer com os gravetos após pega-los.<br>Você entra em uma crise e em uma profunda decepção consigo mesmo. Após um tempo você cai de costas no chão, bate a cabeça em uma pedra, e... pois é.<br>Você Morreu!",
    escolha1: "Voltar ao início!",
    escolha1function: "início",
    escolha2: "Tentar reviver!",
    escolha2function: "reviver",
  },

  ["rio-1"]: {
    texto:
      "Após uma longa caminhada você chegou a uma parte do rio, o rio é tão extenso que não é possível atravessa-lo apenas nadando, consequentemente te obrigando a ficar do lado onde está, ou talvez você possa teimar e tentar, a escolha é sua.<br>Aproveitando o rio na sua frente, você pode beber um pouco de água para matar a sua sede e quem sabe te fazer se sentir melhor.<br>O que você faz?",
    escolha1: "Tentar atravessar nadando",
    escolha1function: "nadar-1",
    escolha2: "Beber água do rio",
    escolha2function: "água-1",
  },
  ["nadar-1"]: {
    texto:
      "Você decide teimar e mesmo sabendo que não é possível atravessar o rio a nado, você faz essa escolha, infelizmente ( ou felizmente ) o destino é certo e após algumas batidas de pernas e braços, o cansaço chega e você não alcançou nem a metade do rio, você não vê outra escolha a não ser aceitar o seu destino, afundar e afogar em sua teimosia.<br>Você morreu!",
    escolha1: "Voltar ao início!",
    escolha1function: "início",
    escolha2: "Tentar reviver!",
    escolha2function: "reviver",
  },
  ["água-1"]: {
    texto:
      "Você olha para o rio, após observa-lo, você imagina que não há nenhum perigo em beber alguns goles de sua água, você pega um pouco da água em suas mãos e começa a beber, você até consegue saborear e engolir aquela água, por um tempo ainda está tudo bem, você se sente despreocupado e se levanta.<br>Uau, você não morreu!<br>Ah, não, é... você começa a se sentir muito mal, começa a cambalear e infelizmente você ainda estava muito perto do rio, assim, após perder o equilibrio, você cai e consequentemente afunda na própria água ingerida por você.<br>Você morreu!",
    escolha1: "Voltar ao início!",
    escolha1function: "início",
    escolha2: "Tentar reviver!",
    escolha2function: "reviver",
  },
};

function changeTexts(caminho) {
  texto.innerHTML = historia[caminho].texto;
  button1.innerHTML = historia[caminho].escolha1;
  button2.innerHTML = historia[caminho].escolha2;

  if (button1.hasAttribute("value")) {
    button1.setAttribute("value", historia[caminho].escolha1function);
  }
  if (button2.hasAttribute("value")) {
    button2.setAttribute("value", historia[caminho].escolha2function);
  }
}

changeTexts("início");

button1.onclick = function () {
  changeTexts(this.getAttribute("value"));
};

button2.onclick = function () {
  changeTexts(this.getAttribute("value"));
};
