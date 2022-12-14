const inputNumber = document.querySelector("#inputNumber");
let randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen2title = document.querySelector(".screen2 h2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;

console.log(randomNumber);

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

//apertar enter na tela de adivinhação
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    handleTryClick();
  }
});

//callback function
function handleTryClick(event) {
  event.preventDefault(); //não faça o padrão

  if (Number(inputNumber.value) == randomNumber) {
    handleToggleScreen();

    if (xAttempts == 1) {
      screen2title.innerText = `Parabéns,acertou na ${xAttempts}º tentativa!`;
    } else {
      screen2title.innerText = `Parabéns, acertou em ${xAttempts} tentativas!`;
    }
  } else {
    window.alert("Que pena, infelizmente você errou! tente novamente!");
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleToggleScreen() {
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
}

function handleResetClick() {
  handleToggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}
