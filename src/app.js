$(document).ready(() => {
  $(".generateButton").off('click').on('click', () => {
    $("#hCorrectness").text("");
    $("#sCorrectness").text("");
    $("#Answer").val("");
    let question = generateQuestion();
    $(".num1").text(question[0]);
    $(".num2").text(question[1]);
    $(".operator").text(question[2]);
    $(".puppyImage").remove();
  });

  $("#Answer").on('keyup', () => {
    if (event.keyCode === 13) {
      $("#checkAnswer").click();
    }
  });

  $("#checkAnswer").off('click').on('click', () => {
    $(".puppyImage").remove();
    const num1 = parseInt($(".num1").text());
    const num2 = parseInt($(".num2").text());
    const op = $(".operator").text();
    const answer = parseInt($("#Answer").val());
    if(checkAnswer(num1, num2, op, answer)) {
      $("#hCorrectness").text("Correct!");
      $('<img class="puppyImage" alt="happy image" src="images/happyPuppy.jpg"/>').appendTo('.happyPuppy');
    } else {
      $("#sCorrectness").text("Incorrect, try again!");
      $('<img class="puppyImage" alt="sad image" src="images/sadPuppy.jpg"/>').appendTo('.sadPuppy');
    }
  });
});
