(() => {

  const  porcentagens = document.querySelector(".porcentagens");
  const  buttons = document.querySelectorAll(".porcentagem > button");
  const  input = document.querySelector(".porcentagem > input");
  const qtdPessoas = document.querySelector("#input-numero-pessoas");
  const  legendaInput = document.querySelector(".legenda-input");
  const  inputNumeroPessoas = document.querySelector("#input-numero-pessoas");

  jQuery(function() {
    
    jQuery("#bill").maskMoney({ 
    thousands:'.', 
    decimal:','
  })
  
  });
  
  porcentagens.addEventListener("click", (event) => {
    if (event.target == document.querySelector(".porcentagem-custom")) {
      removeFocusButton();
      addFocusInput();
    } else {
      removeFocusInput();
      addFocusButton();
    }
  });

  qtdPessoas.addEventListener("blur", () => {
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
  
  function addFocusInput() {
    input.setAttribute("class", "campo-input porcentagem-custom focus");
  }
  
  function removeFocusInput() {
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
      button = buttons[i];
      button.setAttribute("class", "botao padrao");
    }
  }
  
  function avisoErro(mensagem) {

    removeAviso();
  
    let mensagemAviso = document.createElement("span");
  
    mensagemAviso.innerHTML = mensagem;
  
    mensagemAviso.setAttribute("class", "mensagem-erro");
    inputNumeroPessoas.setAttribute("class", "campo-input campo-invalido");
  
    legendaInput.appendChild(mensagemAviso);
  
    return;
  }
  
  function removeAviso() {
    if (legendaInput.childElementCount > 1) {
      legendaInput.removeChild(legendaInput.children[1]);
      inputNumeroPessoas.setAttribute("class", "campo-input");
    }
  
    return;
  }  
})();