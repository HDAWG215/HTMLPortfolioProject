
function generateQuestion() {
  let number1 = Math.floor((Math.random() * 100) + 1);
  let number2 = Math.floor((Math.random() * number1));
  let ops = ['+', '-', '*', '/'];

  let op = ops[Math.round(Math.random() * 3)];

  if (op == '/') {
    while (number1 % number2 != 0) {
      number2 = Math.floor((Math.random() * number1) + 1);
    }
  }
  document.getElementById("num1").innerHTML = number1;
  document.getElementById("num2").innerHTML = number2;
  document.getElementById("operator").innerHTML = op;
}

