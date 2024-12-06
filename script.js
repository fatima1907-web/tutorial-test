"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const resultArea = document.getElementById("resultArea");
  const buttons = document.querySelectorAll(".calculator-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      const action = this.getAttribute("data-action");

      if (action === "delete") {
        deleteLast();
      } else if (action === "calculate") {
        calculateResult();
      } else if (value) {
        appendOperation(value);
      }
    });
  });

  function appendOperation(operation) {
    resultArea.innerHTML += operation;
  }

  function calculateResult() {
    try {
      let result = eval(resultArea.innerHTML);
      resultArea.innerHTML = result;
    } catch (e) {
      // If there's an error in calculation, you could handle it gracefully
      resultArea.innerHTML = "Error";
    }
  }

  function deleteLast() {
    if (resultArea.innerHTML.endsWith(" ")) {
      resultArea.innerHTML = resultArea.innerHTML.slice(0, -3);
    } else {
      resultArea.innerHTML = resultArea.innerHTML.slice(0, -1);
    }
  }
});
