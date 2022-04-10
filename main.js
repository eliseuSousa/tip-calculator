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

const numeroPessoas = document.querySelector("#input-numero-pessoas");

numeroPessoas.addEventListener("blur", function() {
  // Regex para números inteiros negativos:
  const exp1 = /^-\d+$/g;

  // Regex para caracteres alfabéticos:
  const exp2 = /^[a-zA-Z]+$/g;
  if (numeroPessoas.value == 0) {
    console.log("Con't be zero");
  }
  if (exp1.test(numeroPessoas.value) || exp2.test(numeroPessoas.value)) {
    console.log("Only positive values");
  }
})


