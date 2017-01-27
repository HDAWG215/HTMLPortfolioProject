
function checkAnswer() {
  let answer = document.getElementById("Answer").value.toNumber;
  let num1 = document.getElementById("num1").innerHTML;
  let num2 = document.getElementById("num2").innerHTML;
  let op = document.getElementById("operator").innerHTML;
  let correctAnswer = function () {
    if (op == '+') {
      return (num1 + num2).toNumber;
    } else if (op == '-') {
      return (num1 - num2).toNumber;
    } else if (op == '*') {
      return (num1 * num2).toNumber;
    } else if (op == '/') {
      return (num1 / num2).toNumber;
    }
  };
  if (answer == correctAnswer) {
    alert('Correct! Well done!');
  } else if (answer != correctAnswer) {
    alert('Try again!');
  } else {
    document.getElementById("checkAnswer").innerHTML = 'Something went wrong';
  }
}
