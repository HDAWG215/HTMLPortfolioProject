
const generateNumbers = () => {
  let number1 = Math.floor((Math.random() * 100) + 1);
  let number2 = Math.floor((Math.random() * 100) + 1);
  return [number1, number2];
};

const generateQuestion = () => {
  let numbers = generateNumbers();
  let ops = ['+', '-', '*', '/'];
  num1 = document.getElementById("num1");
  num2 = document.getElementById("num2");
  op = document.getElementById("operator");
  num1.innerHTML=numbers[0];
  num2.innerHTML=numbers[1];
  op.innerHTML=ops[Math.floor((Math.random() * 3))]
};

export default [generateNumbers(), generateQuestion()];
