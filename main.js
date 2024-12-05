const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById("calculateBtn");
const resultField = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
 
  if (isNaN(num1) || isNaN(num2)) {
    resultField.value = "Введите числа!";
    return;
  }

   const sum = num1 + num2;

   resultField.value = sum;
});




