const randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen2title = document.querySelector(".screen2 h2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;

console.log(randomNumber);

//callback function
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

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

function handleResetClick(event) {
  event.preventDefault();
  screen2.classList.add("hide");
  screen1.classList.remove("hide");
  xAttempts = 1;
}

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
