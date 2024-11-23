const texto = document.getElementById("text-box");
const texto_alerta = document.getElementById("text-alert");
const escolha1 = document.getElementById("choice-1");
const escolha2 = document.getElementById("choice-2");

const historia = {
  ["início"]: {
    texto:
      "Você está em um campo aberto e a sua esquerda há uma floresta cheia de grandes e pequenas árvores. Além da floresta, a sua direita há um rio cujo tamanho é tanto que não é possível enxergar sua foz e muito menos sua nascente.",
    alerta: "Para onde você decide ir?",
    escolha1: "Ir a <strong>Floresta</strong>",
    escolha1caminho: "floresta-1",
    escolha2: "Ir ao <strong>Rio</strong>",
    escolha2caminho: "rio-1",
  },
  ["reviver"]: {
    texto:
      "Você tenta usar toda sua força interior para poder voltar a vida, mas infelizmente a vida é triste e nada é como a gente quer, então isso não funciona e você continua morto.",
    alerta: "Que pena!",
    escolha1: "Voltar ao <strong>início</strong>!",
    escolha1caminho: "início",
    escolha2: "Voltar ao <strong>início</strong>!",
    escolha2caminho: "início",
  },

  ["floresta-1"]: {
    texto:
      "Você foi até a floresta. Na floresta há várias maçãs, cuja aparência é duvidosa, espalhadas pelo chão próximas a uma árvore. Além das maçãs há vários gravetos de diversos tamanhos caídos das árvores próximas, poderiam ser úteis para fabricação de ferramentas.",
    alerta: "O que você faz?",
    escolha1: "Comer <strong>maçãs</strong>",
    escolha1caminho: "maçã-1",
    escolha2: "Pegar <strong>gravetos</strong>",
    escolha2caminho: "gravetos-1",
  },
  ["maçã-1"]: {
    texto:
      "Você comeu uma das maçãs que estavam no chão. Como foi dito anteriomente, elas estavam com uma aparência suspeita. Infelizmente a que você escolheu comer estava realmente podre, especialmente por dentro.",
    alerta: "Você morreu!",
    escolha1: "Voltar ao <strong>início</strong>!",
    escolha1caminho: "início",
    escolha2: "Tentar <strong>reviver</strong>!",
    escolha2caminho: "reviver",
  },
  ["gravetos-1"]: {
    texto:
      "Ao chegar perto dos gravetos, você para por alguns segundos enquanto os observa, esse pequeno tempo foi suficente para você perceber que você não fazia a menor ideia do que fazer com os gravetos após pega-los. Você entra em uma crise e em uma profunda decepção consigo mesmo. Após um tempo você cai de costas no chão, bate a cabeça em uma pedra, e... pois é.",
    alerta: "Você morreu!",
    escolha1: "Voltar ao <strong>início</strong>!",
    escolha1caminho: "início",
    escolha2: "Tentar <strong>reviver</strong>!",
    escolha2caminho: "reviver",
  },

  ["rio-1"]: {
    texto:
      "Após uma longa caminhada você chegou a uma parte do rio, o rio é tão extenso que não é possível atravessa-lo apenas nadando, consequentemente te obrigando a ficar do lado onde está, ou talvez você possa teimar e tentar, a escolha é sua.Aproveitando o rio na sua frente, você pode beber um pouco de água para matar a sua sede e quem sabe te fazer se sentir melhor.",
    alerta: "O que você faz?",
    escolha1: "Tentar <strong>atravessar</strong> nadando",
    escolha1caminho: "nadar-1",
    escolha2: "<strong>Beber água</strong> do rio",
    escolha2caminho: "água-1",
  },
  ["nadar-1"]: {
    texto:
      "Você decide teimar e mesmo sabendo que não é possível atravessar o rio a nado, você faz essa escolha, infelizmente ( ou felizmente ) o destino é certo e após algumas batidas de pernas e braços, o cansaço chega e você não alcançou nem a metade do rio, você não vê outra escolha a não ser aceitar o seu destino, afundar e afogar em sua teimosia.",
    alerta: "Você morreu!",
    escolha1: "Voltar ao <strong>início</strong>!",
    escolha1caminho: "início",
    escolha2: "Tentar <strong>reviver</strong>!",
    escolha2caminho: "reviver",
  },
  ["água-1"]: {
    texto:
      "Você olha para o rio, após observa-lo, você imagina que não há nenhum perigo em beber alguns goles de sua água, você pega um pouco da água em suas mãos e começa a beber, você até consegue saborear e engolir aquela água, por um tempo ainda está tudo bem, você se sente despreocupado e se levanta. Uau, você não morreu! Ah, não, é... você começa a se sentir muito mal, começa a cambalear e infelizmente você ainda estava muito perto do rio, assim, após perder o equilibrio, você cai e consequentemente afunda na própria água ingerida por você.",
    alerta: "Você morreu!",
    escolha1: "Voltar ao <strong>início</strong>!",
    escolha1caminho: "início",
    escolha2: "Tentar <strong>reviver</strong>!",
    escolha2caminho: "reviver",
  },
};

var texto_acabou = false;
function changeTexts(caminho) {
  texto_acabou = false;
  var i = 0;
  var speed = 40;

  texto.innerHTML = "";
  texto_alerta.innerHTML = "";
  escolha1.innerHTML = "Escolha 1";
  escolha2.innerHTML = "Escolha 2";
  texto_alerta.style.color = "rgb(0, 0, 0)";

  function changeButtonsAlerts() {
    var i2 = 0;
    var speed2 = 20;

    escolha1.innerHTML = historia[caminho].escolha1;
    escolha2.innerHTML = historia[caminho].escolha2;

    if (historia[caminho].alerta == "Você morreu!") {
      texto_alerta.style.color = "rgb(180, 40, 68)";
    } else {
      texto_alerta.style.color = "rgb(29, 86, 161)";
    }

    function typeWriter2() {
      if (i2 < historia[caminho].alerta.length) {
        texto_alerta.innerHTML += historia[caminho].alerta.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed2);
      } else {
        texto_acabou = true;
      }
    }
    typeWriter2();
  }

  if (escolha1.hasAttribute("value")) {
    escolha1.setAttribute("value", historia[caminho].escolha1caminho);
  }
  if (escolha2.hasAttribute("value")) {
    escolha2.setAttribute("value", historia[caminho].escolha2caminho);
  }

  function typeWriter() {
    if (i < historia[caminho].texto.length) {
      texto.innerHTML += historia[caminho].texto.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      changeButtonsAlerts();
    }
  }
  typeWriter();
}

function callMainFunction(n) {
  if (texto_acabou == true) {
    if (n == 1) {
      changeTexts(escolha1.getAttribute("value"));
    } else {
      changeTexts(escolha2.getAttribute("value"));
    }
  }
}

const tela_principal = document.getElementById("main-screen")
const tela_jogo = document.getElementById("game-screen")

function startGame() {
  if ( tela_jogo.hasAttribute("hidden") ){
    tela_jogo.removeAttribute("hidden");
    tela_principal.setAttribute("hidden", true);

    changeTexts("início");
  }else{
    // Hm, isso não deveria acontecer
    tela_jogo.setAttribute("hidden", true);
  }
}