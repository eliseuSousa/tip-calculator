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