function checkAnswer(num1, num2, op, answer) {
  const correctAnswer = getCorrectAnswer(num1, num2, op);
  if (answer == correctAnswer) {
    return true;
  } else if (answer != correctAnswer) {
    return false;
  } else {
    $("#checkAnswer").innerHTML("Something went wrong!");
  }
}

function getCorrectAnswer(num1, num2, op) {
  switch(op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}
