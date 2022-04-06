let buttons = document.querySelectorAll(".porcentagem > button");

buttons.forEach(function(key) {
  key.addEventListener("click", function() {
    removeStyles();
    this.setAttribute("class", "botao clicked");
  });
})

function removeStyles() {
  let button;
  for(let i = 0; i < buttons.length; i++) {
   button = document.querySelectorAll(".porcentagem > button")[i];
   button.removeAttribute("clicked");
   button.setAttribute("class", "botao padrao");
  }
}