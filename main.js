(() => {
  const valorDaCompra = parseFloat(document.querySelector("#bill").value);
  const camposInputs = document.querySelectorAll(".campo-input");
  const  porcentagens = document.querySelector(".porcentagens");
  const  buttons = document.querySelectorAll(".porcentagem > button");
  const  input = document.querySelector(".porcentagem > input");
  const inputQtdPessoas = document.querySelector("#input-numero-pessoas");
  const qtdPessoas = parseFloat(document.querySelector("#input-numero-pessoas").value);
  const form = document.querySelector(".formulario");
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculaGorjeta();
  });

  botaoReset.addEventListener("click", () => {
    
    removeFocusButton();

    removeAviso();
    
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
  
  function calculaGorjeta() {

    const gorjeta = parseFloat(porcentagemSelecionada)/100*valorDaCompra.toFixed(2);
    const valorPorPessoa = gorjeta/qtdPessoas.toFixed(2);
    tipAmount.innerHTML = `$${gorjeta.toFixed(2)}`;
    totalPorPessoa.innerHTML = `$${valorPorPessoa.toFixed(2)}`;
  }

})();