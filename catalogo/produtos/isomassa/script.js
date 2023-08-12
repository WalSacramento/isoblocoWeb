definirEstadoInicial();

function handleClickMenu() {
  let menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('show');
}

let count = 1
document.getElementById("radio1").checked = true

setInterval(function () {
  nextSlide()
  scrollNextPhoto()
}, 5000)

function nextSlide() {
  count++
  if (count > 5) {
    count = 1
  }
  document.getElementById('radio' + count).checked = true
}

function beforeSlide() {
  count--
  if (count < 1) {
    count = 5
  }
  document.getElementById('radio' + count).checked = true
}

function definirEstadoInicial() {
  var divEstrutural = document.querySelector(".estrutural");
  var divVedacao = document.querySelector(".vedacao");

  var botaoEstrutural = document.getElementById("estrutural");
  var botaoVedacao = document.getElementById("vedacao");

  var imagemEstrutural = document.getElementById("imagemEstrutural");
  var imagemVedacao = document.getElementById("imagemVedacao");

  // Definir estado inicial das divs
  divEstrutural.style.display = "flex";
  imagemEstrutural.style.display = "none";
  divVedacao.style.display = "none";
  imagemEstrutural.style.display = "flex";

  // Definir estado inicial dos botões
  botaoEstrutural.style.backgroundColor = "var(--verdeIsobloco)";
  botaoEstrutural.style.color = "white";
  botaoVedacao.style.backgroundColor = "";
  botaoVedacao.style.color = "";
}

function alternarDivs(botao, secao) {
  var divsVedacao = secao.querySelectorAll(".vedacao");
  var divsEstrutural = secao.querySelectorAll(".estrutural");
  var divVideo = secao.querySelectorAll(".videoCarroussel");
  var divFichaTecnica = secao.querySelectorAll(".textSection.estrutural#fichaTecnica");

  if (botao === "vedacao") {
    divsVedacao.forEach(function(div) {
      div.style.display = "flex";
    });
    divsEstrutural.forEach(function(div) {
      div.style.display = "none";
    });
    divVideo.forEach(function(div) {
      div.style.display = "flex";
    });
    divFichaTecnica.forEach(function(div) {
      div.style.width = "auto";
    });
  } else if (botao === "estrutural") {
    divsVedacao.forEach(function(div) {
      div.style.display = "none";
    });
    divsEstrutural.forEach(function(div) {
      div.style.display = "flex";
    });
    divVideo.forEach(function(div) {
      div.style.display = "none";
    });
    divFichaTecnica.forEach(function(div) {
      div.style.width = "100%";
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



function scrollNextPhoto() {
  var photoSlider = document.getElementById('photo-slider');
  var currentScroll = photoSlider.scrollLeft;
  var photoWidth = photoSlider.offsetWidth;

  // Calcula a posição da próxima foto
  var nextScroll = currentScroll + photoWidth;

  // Verifica se já chegou ao final do slider
  if (nextScroll >= photoSlider.scrollWidth) {
    // Se já estiver no final, volta para o início
    photoSlider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    // Caso contrário, faz o scroll para a próxima foto
    photoSlider.scrollTo({ left: nextScroll, behavior: 'smooth' });
  }
}

function scrollPreviousPhoto() {
  var photoSlider = document.getElementById('photo-slider');
  var currentScroll = photoSlider.scrollLeft;
  var photoWidth = photoSlider.offsetWidth;

  // Calcula a posição da foto anterior
  var previousScroll = currentScroll - photoWidth;

  // Verifica se já está no início do slider
  if (previousScroll < 0) {
    // Se estiver no início, volta para a primeira foto
    photoSlider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    // Caso contrário, faz o scroll para a foto anterior
    photoSlider.scrollTo({ left: previousScroll, behavior: 'smooth' });
  }
}