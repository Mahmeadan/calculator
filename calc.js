//select the HTML elements and store them in variables
const buttons = document.querySelectorAll(".buttons");
const results = document.querySelectorAll(".output");
const operation = document.querySelectorAll(".operation-button");

let currentNumber = "0";
let waitingForSecondNumber = "0";

// adding buttons and operation listeners
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (currentNumber === "0" || waitingForSecondNumber) {
      currentNumber = button.class;
      waitingForSecondNumber = false;
    } else {
        currentNumber += button.class;
    }
    results.value = currentNumber;

  });
});
