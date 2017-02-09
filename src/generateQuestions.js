
function generateQuestion() {
  const number1 = Math.floor((Math.random() * 100) + 1);
  let number2 = Math.floor((Math.random() * number1) + 2);
  const ops = ['+', '-', '*', '/'];

  const op = ops[Math.round(Math.random() * 3)];

  if (op === '/') {
    while (number1 % number2 != 0) {
      number2 = Math.floor((Math.random() * number1) + 2);
    }
  }
  return [number1, number2, op];
}
