function checkAnswer(choice) {
  let isCorrect = choice.getAttribute("data-correct") === "true";
  let quizContainer = document.querySelector(".quiz-div");

  if (isCorrect) {
      resetIncorrectChoices(); // Remove red from all wrong choices
      choice.classList.add("correct");
      disableAllChoices(); // Disable further clicks

      // Dim the quiz container after a short delay
      setTimeout(() => {
          quizContainer.classList.add("dimmed");
      }, 500);
  } else {
      resetIncorrectChoices(); // Remove red from previous wrong choice
      choice.classList.add("incorrect"); // Mark current wrong choice
  }
}

function resetIncorrectChoices() {
  let choices = document.querySelectorAll(".choice");
  choices.forEach(choice => choice.classList.remove("incorrect"));
}

function disableAllChoices() {
  let choices = document.querySelectorAll(".choice");
  choices.forEach(choice => choice.style.pointerEvents = "none"); // Disable all choices
}
