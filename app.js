const inputA = document.querySelector("#liczbaA");
const inputB = document.querySelector("#liczbaB");
const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");
const btnMnozenie = document.querySelector("#mnozenie");
const btnDzielenie = document.querySelector("#dzielenie");
const btnPotega = document.querySelector("#potega");
const msg = document.querySelector("#msg");

const plus = () => {
  const result = +inputA.value + +inputB.value;
  msg.textContent = `Wynik to: ${result}`;
};
const minus = () => {
  const result = +inputA.value - +inputB.value;
  msg.textContent = `Wynik to: ${result}`;
};
const mnozenie = () => {
  const result = +inputA.value * +inputB.value;
  msg.textContent = `Wynik to: ${result}`;
};
const dzielenie = () => {
  const result = +inputA.value / +inputB.value;
  msg.textContent = `Wynik to: ${result}`;
};
const potega = () => {
  const result = inputA.value ** +inputB.value;
  msg.textContent = `Wynik to: ${result}`;
};

btnPlus.addEventListener("click", plus);
btnMinus.addEventListener("click", minus);
btnMnozenie.addEventListener("click", mnozenie);
btnDzielenie.addEventListener("click", dzielenie);
btnPotega.addEventListener("click", potega);
