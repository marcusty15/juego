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
    message = "Ganaste"
    return resultado.innerHTML = `<h2>${message}</h2>`;;
  } else if (result === "lose") {
    message = "perdiste"
    return resultado.innerHTML = `<h2>${message}</h2>`;
  } else {
    message = "Empataste"
    return resultado.innerHTML = `<h2>${message}</h2>` ;
  }
  ;
};

const juego = (event) => {
  event.preventDefault();
  let computerSelection = getRandomArbitrary(sorteo, 0, sorteo.length - 1);
  let entrada = document.querySelector("#input").value;
  let result = getResult(computerSelection, entrada);
  let showmessage = showMessage(result);
  
};

// let computerSelection = getRandomArbitrary(sorteo, 0, sorteo.length - 1);
// let entrada = document.querySelector("#input").value;
// let resultado = document.querySelector(".resultado");

// console.log(
//   "El ganador es:" + getRandomArbitrary(sorteo, 0, sorteo.length - 1)
// );

// console.log(result);
// console.log(getResult);
// if (computerSelection === entrada.value) {
//   alert("empate, sigue jugando");
// } else if (computerSelection === "tijera" && entrada.value === "piedra") {
//   resultado.innerHTML = `<h2>"Ganaste!!!"</h2>`;
// } else if (computerSelection === "tijera" && entrada.value === "papel") {
//   resultado.innerHTML = `<h2>"Perdiste!!!"</h2>`;
// } else if (computerSelection === "piedra" && entrada.value === "papel") {
//   resultado.innerHTML = `<h2>"Ganaste!!!"</h2>`;
// } else if (computerSelection === "piedra" && entrada.value === "tijera") {
//   resultado.innerHTML = `<h2>"Perdiste!!!"</h2>`;
// } else if (computerSelection === "papel" && entrada.value === "piedra") {
//   resultado.innerHTML = `<h2>"Ganaste!!!"</h2>`;
// } else if (computerSelection === "papel" && entrada.value === "tijera") {
//   resultado.innerHTML = `<h2>"Perdiste!!!"</h2>`;
// }
// entrada.value = "";
