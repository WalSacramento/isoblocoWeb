function handleClickMenu() {
  let menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('show');
}

let count = 1
document.getElementById("radio1").checked = true

setInterval(function () {
  nextSlide()
}, 5000)

function nextSlide() {
  count++
  if (count > 5) {
    count = 1
  }
  document.getElementById('radio' + count).checked = true
}

function definirEstadoInicial() {
  var divEstrutural = document.querySelector(".estrutural");
  var divVedacao = document.querySelector(".vedacao");

  var botaoEstrutural = document.getElementById("estrutural");
  var botaoVedacao = document.getElementById("vedacao");

  // Definir estado inicial das divs
  divEstrutural.style.display = "none";
  divVedacao.style.display = "flex"; // Alteração aqui

  // Definir estado inicial dos botões
  botaoEstrutural.style.backgroundColor = "";
  botaoEstrutural.style.color = "";
  botaoVedacao.style.backgroundColor = "var(--verdeIsobloco";
  botaoVedacao.style.color = "white";
}

function alternarDivs(botao, secao) {
  var divsVedacao = secao.querySelectorAll(".textSection.vedacao");
  var divsEstrutural = secao.querySelectorAll(".textSection.estrutural");

  if (botao === "vedacao") {
    divsVedacao.forEach(function(div) {
      div.style.display = "flex";
    });
    divsEstrutural.forEach(function(div) {
      div.style.display = "none";
    });
  } else if (botao === "estrutural") {
    divsVedacao.forEach(function(div) {
      div.style.display = "none";
    });
    divsEstrutural.forEach(function(div) {
      div.style.display = "flex";
    });
  }

  var botaoVedacao = secao.querySelector("#vedacao");
  var botaoEstrutural = secao.querySelector("#estrutural");

  if (botao === "vedacao") {
    botaoVedacao.style.backgroundColor = "var(--verdeIsobloco)";
    botaoVedacao.style.color = "white";
    botaoEstrutural.style.backgroundColor = "";
    botaoEstrutural.style.color = "";
  } else if (botao === "estrutural") {
    botaoVedacao.style.backgroundColor = "";
    botaoVedacao.style.color = "";
    botaoEstrutural.style.backgroundColor = "var(--verdeIsobloco)";
    botaoEstrutural.style.color = "white";
  }
}

// Definir estado inicial ao carregar a página
definirEstadoInicial();