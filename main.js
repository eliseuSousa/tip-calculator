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
    if (event.target == input) {
      removeFocusButton();
      input.classList.add('focus');
    } else {
      addFocusButton(event);
      input.classList.remove('focus');
      input.value="";
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
    
    if (!buttons[0].classList[2]) {
      buttons[0].classList.add('focus');
    }

    if (input.classList[2]) {
      input.classList.remove('focus');
    }
    camposInputs.forEach((input) => {
      input.value = '';
    });

    tipAmount.innerHTML = '$0.00';
    totalPorPessoa.innerHTML = '$0.00';
  });

  function removeFocusButton() {
    buttons.forEach((button) => {
      button.classList.remove('focus');
    })
  }

  function addFocusButton(event) {
    removeFocusButton();
    buttons.forEach((button) => {
      if (event.target == button) {
        button.classList.add('focus');
        return;         
      }
    });
  }
  
  function avisoErro(mensagem) {

    removeAviso();
  
    let mensagemAviso = document.createElement("span");
  
    mensagemAviso.innerHTML = mensagem;
  
    mensagemAviso.setAttribute("class", "mensagem-erro");
    qtdPessoas.setAttribute("class", "campo-input campo-invalido");
  
    legendaInput.appendChild(mensagemAviso);
  }
  
  function removeAviso() {
    if (legendaInput.childElementCount > 1) {
      legendaInput.removeChild(legendaInput.children[1]);
      qtdPessoas.setAttribute("class", "campo-input");
    }
  }
  
  function calculaGorjeta() {
    const gorjeta = parseFloat(porcentagemSelecionada)/100*parseFloat(camposInputs[0].value).toFixed(2);
    const valorPorPessoa = gorjeta/parseInt(qtdPessoas.value).toFixed(2);
    tipAmount.innerHTML = `$${gorjeta.toFixed(2)}`;
    totalPorPessoa.innerHTML = `$${valorPorPessoa.toFixed(2)}`;
  }

})();