registerRequiredInputNumber();

document
  .getElementById("prime-number-input")
  .addEventListener("keyup", function (event) {
    validatePrimeNumberInput(this);
    if (event.key === "Enter") {
      event.preventDefault();
      checkPrimeNumber();
    }
  });

function validatePrimeNumberInput(element) {
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

// Prime number check
function checkPrimeNumber() {
  const num = parseInt(document.getElementById("prime-number-input").value);
  if (isNaN(num)) {
    // Handle invalid input
    showDialog("Prime Number Result", "Please enter a valid number.");
    return;
  }

  const result = isPrimeNumber(num);

  const message = result
    ? `${num} is a prime number.`
    : `${num} is not a prime number.`;

  // Show result in dialog box
  showDialog("Prime Number Result", message);

  // Show result on label
  document.getElementById("prime-number-result").textContent = message;
}

function isPrimeNumber(number) {
  if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (number === 2) return true; // 2 is the only even prime number
  if (number % 2 === 0) return false; // All other even numbers are not prime

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false; // If divisible by any number up to sqrt(number), it's not prime
  }

  return true; // If no divisors were found, the number is prime
}
