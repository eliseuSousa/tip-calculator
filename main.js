let buttons = document.querySelectorAll(".porcentagem > button");

buttons.forEach(function (key) {
  key.addEventListener("click", function () {
    removeStyles();
    this.setAttribute("class", "botao focus");
  });
});

function removeStyles() {
  let button;
  for (let i = 0; i < buttons.length; i++) {
    button = document.querySelectorAll(".porcentagem > button")[i];
    button.removeAttribute("focus");
    button.setAttribute("class", "botao padrao");
  }
}
