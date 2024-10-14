registerRequiredInputNumber();

// Add event listener for 'Enter' key on the square root input
document
  .getElementById("sqrt-input")
  .addEventListener("keyup", function (event) {
    validateSquareRootInput(this);

    if (event.key === "Enter") {
      event.preventDefault();
      findSquareRoot();
    }
  });

function validateSquareRootInput(element) {
  const isInteger = isRealNumber(element.value);

  // Get the button
  const button = element
    .closest("div.operation-item")
    .querySelector(".operation-button");

  if (isInteger && button !== undefined && button !== null) {
    // Remove enable the button
    button.disabled = false;
  } else {
    // Add disable the button
    button.disabled = true;
  }
}

function findSquareRoot() {
  const input = document.getElementById("sqrt-input").value; // Get input value
  const resultElement = document.getElementById("sqrt-result"); // Result display element

  // Check for invalid input
  if (!input || isNaN(input) || input < 0) {
    resultElement.textContent = "Please enter a valid non-negative number.";
    return;
  }

  const number = parseFloat(input); // Parse input as a floating point number
  const squareRoot = Math.sqrt(number); // Calculate square root

  // Show result in dialog
  const title = "Square Root Result";
  const message = `Square root of ${number} is ${squareRoot.toFixed(2)}.`;
  showDialog(title, message);

  // Also display result in the result element on the page
  resultElement.textContent = `Square root of ${number} is ${squareRoot.toFixed(
    2
  )}.`;
}
