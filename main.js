const randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen2title = document.querySelector(".screen2 h2");
let xAttempts = 1;

console.log(randomNumber);

function handleOnClick(event) {
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

  xAttempts++;
}

function handleBackOnClick(event) {
  event.preventDefault();
  screen2.classList.add("hide");
  screen1.classList.remove("hide");
}
