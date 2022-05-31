const getRandomArbitrary = (participantes, min, max) => {
  return participantes[Number((Math.random() * (max - min) + min).toFixed(0))];
};
const sorteo = ["piedra", "papel", "tijera"];
// console.log(
//   "El ganador es:" + getRandomArbitrary(sorteo, 0, sorteo.length - 1)
//);

let entrada = document.querySelector("#input");
let resultado = document.querySelector(".resultado")
alert(entrada.value);
const juego = (event) => {
  event.preventDefault();
  if (getRandomArbitrary(sorteo, 0, sorteo.length - 1) === entrada.value) {
    alert("empate, sigue jugando");
  } else if (getRandomArbitrary(sorteo, 0, sorteo.length - 1) === "tijera" && entrada.value === "piedra") {
    resultado.innerHTML = `<h2>"Ganaste!!!"</h2>`;
  } else if (getRandomArbitrary(sorteo, 0, sorteo.length - 1) === "tijera" && entrada.value === "papel") {
    resultado.innerHTML =`<h2>"Perdiste!!!"</h2>`;
  } else if (getRandomArbitrary(sorteo, 0, sorteo.length - 1) === "piedra" && entrada.value === "papel") {
    resultado.innerHTML =`<h2>"Ganaste!!!"</h2>`;
  } else if (getRandomArbitrary(sorteo, 0, sorteo.length - 1) === "piedra" && entrada.value === "tijera") {
    resultado.innerHTML =`<h2>"Perdiste!!!"</h2>`;
  } else if (getRandomArbitrary(sorteo, 0, sorteo.length - 1) === "papel" && entrada.value === "piedra") {
    resultado.innerHTML =`<h2>"Ganaste!!!"</h2>`;
  } else if (getRandomArbitrary(sorteo, 0, sorteo.length - 1) === "papel" && entrada.value === "tijera") {
    resultado.innerHTML =`<h2>"Perdiste!!!"</h2>`;
  }
};
