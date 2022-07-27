(() => {

  const camposInputs = document.querySelectorAll(".campo-input");
  const  porcentagens = document.querySelector(".porcentagens");
  const  buttons = document.querySelectorAll(".porcentagem > button");
  const  input = document.querySelector(".porcentagem > input");
  const form = document.querySelector(".formulario");
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

    const valorDaCompra = parseFloat(document.querySelector("#bill").value);
    const porcentagemSelecionada = parseFloat(document.querySelector(".focus").value);
    const qtdPessoas = parseFloat(document.querySelector("#input-numero-pessoas").value);

    const gorjeta = parseFloat(valorDaCompra*(porcentagemSelecionada/100).toFixed(2));
    const valorPorPessoa = parseFloat((gorjeta/qtdPessoas).toFixed(2));

    tipAmount.innerHTML = `$${gorjeta}`;
    totalPorPessoa.innerHTML = `$${valorPorPessoa}`;
  }

})();