jQuery(function() {
    
  jQuery("#bill").maskMoney({ 
	thousands:'.', 
	decimal:','
})

});

let porcentagens = document.querySelector(".porcentagens");
let buttons = document.querySelectorAll(".porcentagem > button");

porcentagens.addEventListener("click", function(event) {
  if (event.target == document.querySelector(".porcentagem-custom")) {
    removeFocusButton();
    addFocusInput();
  } else {
    removeFocusInput();
    addFocusButton();
  }
});

function addFocusInput() {
  let input = document.querySelector(".porcentagem > input");
  input.setAttribute("class", "campo-input porcentagem-custom focus");
}

function removeFocusInput() {
  let input = document.querySelector(".porcentagem > input");
  input.setAttribute("class", "campo-input porcentagem-custom");
}

function addFocusButton() {
  buttons.forEach(function (key) {
    key.addEventListener("click", function () {
      removeFocusButton();
      this.setAttribute("class", "botao focus");
    });
  });  
}

function removeFocusButton() {
  let button;
  for (let i = 0; i < buttons.length; i++) {
    button = document.querySelectorAll(".porcentagem > button")[i];
    button.setAttribute("class", "botao padrao");
  }
}

const qtdPessoas = document.querySelector("#input-numero-pessoas");

qtdPessoas.addEventListener("blur", function() {
  // Regex para números inteiros negativos:
  const exp1 = /^-\d+$/g;

  // Regex para caracteres alfabéticos:
  const exp2 = /^[a-zA-Z]+$/g;

  if (qtdPessoas.value == 0) {
    avisoErro("Con't be zero");
    return;
  }

  if (exp1.test(qtdPessoas.value) || exp2.test(qtdPessoas.value)) {
    avisoErro("Only positive values");
    return;
  }

  removeAviso();
})


function avisoErro(mensagem) {
  let legendaInput = document.querySelector(".legenda-input");
  let inputNumeroPessoas = document.querySelector("#input-numero-pessoas");

  removeAviso();

  let mensagemAviso = document.createElement("span");

  mensagemAviso.innerHTML = mensagem;

  mensagemAviso.setAttribute("class", "mensagem-erro");
  inputNumeroPessoas.setAttribute("class", "campo-input campo-invalido");

  legendaInput.appendChild(mensagemAviso);

  return;
}

function removeAviso() {
  let legenda = document.querySelector(".legenda-input");
  let inputNumeroPessoas = document.querySelector("#input-numero-pessoas");

  if (legenda.childElementCount > 1) {
    legenda.removeChild(legenda.children[1]);
    inputNumeroPessoas.setAttribute("class", "campo-input");
  }

  return;
}


