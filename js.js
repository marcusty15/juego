const getRandomArbitrary = (participantes, min, max) => {
  return participantes[Number((Math.random() * (max - min) + min).toFixed(0))];
};
const sorteo = ["piedra", "papel", "tijera"];

const getResult = (computerSelection, entrada) => {
  if (computerSelection === entrada) {
    return "draw";
  } else if (computerSelection === "tijera" && entrada === "piedra") {
    return "win";
  } else if (computerSelection === "tijera" && entrada === "papel") {
    return "lose";
  } else if (computerSelection === "piedra" && entrada === "papel") {
    return "win";
  } else if (computerSelection === "piedra" && entrada === "tijera") {
    return "lose";
  } else if (computerSelection === "papel" && entrada === "piedra") {
    return "win";
  } else if (computerSelection === "papel" && entrada === "tijera") {
    return "lose";
  }
};

const showMessage = (result) => {
  let message = "";
  let resultado = document.querySelector(".resultado");
  if (result === "win") {
    message = "Ganaste";
  } else if (result === "lose") {
    message = "perdiste";
  } else {
    message = "Empataste";
  }
  return (resultado.innerHTML = `<h2>${message}</h2>`);
};

const juego = (event) => {
  event.preventDefault();
  let computerSelection = getRandomArbitrary(sorteo, 0, sorteo.length - 1);
  let entrada = document.querySelector("#input").value;
  let result = getResult(computerSelection, entrada);
  let showmessage = showMessage(result);
};
