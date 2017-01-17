
function generateNumbers() {
  let number1 = Math.floor((Math.random() * 100) + 1);
  let number2 = Math.floor((Math.random() * 100) + 1);
  return [number1, number2];
}

function generateQuestion() {
  let numbers = generateNumbers();
  let ops = ['+', '-', '*', '/'];
  document.getElementById("num1").innerHTML = numbers[0];
  document.getElementById("num2").innerHTML = numbers[1];
  document.getElementById("operator").innerHTML = ops[Math.round(Math.random() * 3)];
}

