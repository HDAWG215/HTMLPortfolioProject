$(document).ready(() => {
  $(".generateButton").on('click', () => {
    let question = generateQuestion();
    $("#num1").text(question[0]);
    $("#num2").text(question[1]);
    $("#operator").text(question[2]);
  });

  $("#checkAnswer").on('click', () => {
    const num1 = parseInt($("#num1").text());
    const num2 = parseInt($("#num2").text());
    const op = $("#operator").text();
    const answer = parseInt($("#Answer").val());
    if(checkAnswer(num1, num2, op, answer)) {
      const correctness = $("#correctness");
      correctness.text("Correct!");
    } else {
      $("#correctness").text("Incorrect, try again!")
    }
  });
});
