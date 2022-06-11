(() => {

  const camposInputs = document.querySelectorAll(".campo-input");
  const  porcentagens = document.querySelector(".porcentagens");
  const  buttons = document.querySelectorAll(".porcentagem > button");
  const  input = document.querySelector(".porcentagem > input");
  const qtdPessoas = document.querySelector("#input-numero-pessoas");
  const porcentagemSelecionada = document.querySelector(".focus").value;
  const  legendaInput = document.querySelector(".legenda-input");
  const tipAmount = document.querySelector(".tip-amount");
  const totalPorPessoa = document.querySelector(".valor-total");
  const botaoReset = document.querySelector("#reset");

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
    calculaGorjeta()
  })

  botaoReset.addEventListener("click", () => {
    removeFocusButton();
    buttons[0].setAttribute("class", "botao focus");
    camposInputs.forEach((input) => {
      input.value = '';
    });
    tipAmount.innerHTML = '$0.00';
    totalPorPessoa.innerHTML = '$0.00';
  });
  
  function addFocusInput() {
    input.classList.add('focus');
  }
  
  function removeFocusInput() {
    input.value="";
    input.classList.remove('focus')
  }

  function addFocusButton() {
    buttons.forEach((button) => {
      button.classList.remove('focus');
      this.classList.add('focus');
    })
  }

  function removeFocusButton() {
    buttons.forEach((button) => {
      button.classList.remove('focus');
    })
  }

  buttons.forEach((button) => {
    button.addEventListener('click', addFocusButton);
  })
  
  function avisoErro(mensagem) {

    removeAviso();
  
    let mensagemAviso = document.createElement("span");
  
    mensagemAviso.innerHTML = mensagem;
  
    mensagemAviso.setAttribute("class", "mensagem-erro");
    qtdPessoas.setAttribute("class", "campo-input campo-invalido");
  
    legendaInput.appendChild(mensagemAviso);
  
    return;
  }
  
  function removeAviso() {
    if (legendaInput.childElementCount > 1) {
      legendaInput.removeChild(legendaInput.children[1]);
      qtdPessoas.setAttribute("class", "campo-input");
    }
  
    return;
  }
  
  function calculaGorjeta() {
    const gorjeta = parseFloat(porcentagemSelecionada)/100*parseFloat(camposInputs[0].value).toFixed(2);
    const valorPorPessoa = gorjeta/parseInt(qtdPessoas.value).toFixed(2);
    tipAmount.innerHTML = `$${gorjeta.toFixed(2)}`;
    totalPorPessoa.innerHTML = `$${valorPorPessoa.toFixed(2)}`;
  }
})();