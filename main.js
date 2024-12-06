const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const num3Input = document.getElementById("num3");
const calculateBtn = document.getElementById("calculateBtn");
const resultField = document.getElementById("result");

const clear = document.getElementById("calculate-clear");
const random = document.getElementById("calculate-random");

const resultBox = document.getElementById("result-box");



clear.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  num3Input.value = "";
  resultBox.classList.remove("visible");
});

function getRandomNumer() {
  return Math.floor(Math.random() * 100);
}

random.addEventListener("click", () => {
  num1Input.value = getRandomNumer();
  num2Input.value = getRandomNumer();
  num3Input.value = getRandomNumer();
});

calculateBtn.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const num3 = parseFloat(num3Input.value);

  resultBox.classList.add("visible");

  if (isNaN(num1)) {
    resultField.value = "Введите первое число";
    return;
  }

  if (isNaN(num2)) {
    resultField.value = "Введите второе число";
    return;
  }

  if (isNaN(num3)) {
    resultField.value = "Введите третье число";
    return;
  }

  const sum = num2 + num3 + num1;
  resultField.value = sum;
  
  

});

