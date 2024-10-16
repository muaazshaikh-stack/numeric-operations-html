registerRequiredInputNumber();

// When page is ready, add event listener for 'Enter' key on the factorial input
document
  .getElementById("factorial-input")
  .addEventListener("keyup", function (event) {
    validateFactorialInput(this);

    if (event.key === "Enter") {
      event.preventDefault();
      calculateFactorial(); // Call factorial function when 'Enter' is pressed
    }
  });

  function validateFactorialInput(element) {
    const isInteger = isRealNumber(element.value);
  
    // Get the button
    const button = element
      .closest("div.operation-item")
      .querySelector(".operation-button");
  
    if (isInteger && button !== undefined && button !== null) {
      // Enable the button if the input is a valid real number
      button.disabled = false;
    } else {
      // Disable the button if the input is invalid
      button.disabled = true;
    }
  }
  

function calculateFactorial() {
  try {
    const input = document.getElementById("factorial-input").value;
    const resultElement = document.getElementById("factorial-result");

    // Check for invalid input
    if (!input || isNaN(input) || input < 0) {
      resultElement.textContent = "Please enter a valid non-negative number.";
      return;
    }

    const number = parseInt(input, 10); // Parse the input as an integer
    let factorial = 1;

    // Calculate factorial
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }

    // Show result in dialog
    const title = `Factorial Result`;
    const message = `Factorial of ${number} is ${factorial}.`;
    showDialog(title, message);

    // Also display result in the result element on the page
    resultElement.textContent = `Factorial of ${number} is ${factorial}.`;
  } catch (error) {
    alert("An error occurred: " + error.message);
  }
}
