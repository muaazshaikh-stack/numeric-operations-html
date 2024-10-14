registerRequiredInputNumber();

document
  .getElementById("rectangle-length-input")
  .addEventListener("input", function () {
    validateRectangleInput(this);
  });

document
  .getElementById("rectangle-width-input")
  .addEventListener("input", function () {
    validateRectangleInput(this);
  });

document
  .getElementById("rectangle-area-btn")
  .addEventListener("click", calculateRectangleArea);

document
  .getElementById("rectangle-perimeter-btn")
  .addEventListener("click", calculateRectanglePerimeter);

document
  .getElementById("rectangle-length-input")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      showRectangleDialog();
    }
    // loadShapesComponent("rectangle");
  });

document
  .getElementById("rectangle-width-input")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      showRectangleDialog();
    }
  });

function validateRectangleInput(element) {
  // Get the rectangle length and width inputs
  const lengthInput = document.getElementById("rectangle-length-input").value;
  const widthInput = document.getElementById("rectangle-width-input").value;

  // Get the buttons
  const areaBtn = document.getElementById("rectangle-area-btn");
  const perimeterBtn = document.getElementById("rectangle-perimeter-btn");

  // Check if the inputs are valid numbers and greater than zero
  const isValidLength = isRealNumber(lengthInput);
  const isValidWidth = isRealNumber(widthInput);

  if (isValidLength && isValidWidth && lengthInput > 0 && widthInput > 0) {
    // Enable the buttons
    areaBtn.disabled = false;
    perimeterBtn.disabled = false;
  } else {
    // Add input error class list and disable the buttons
    areaBtn.disabled = true;
    perimeterBtn.disabled = true;
  }
}

function calculateRectangleArea() {
  // Clear perimeter result before showing area
  document.getElementById("rectangle-perimeter-result").innerText = "";

  const length = parseFloat(
    document.getElementById("rectangle-length-input").value
  );
  const width = parseFloat(
    document.getElementById("rectangle-width-input").value
  );
  const area = length * width;
  document.getElementById(
    "rectangle-area-result"
  ).innerText = `Area of Rectangle: ${area.toFixed(2)}`;
}

function calculateRectanglePerimeter() {
  // Clear area result before showing perimeter
  document.getElementById("rectangle-area-result").innerText = "";

  const length = parseFloat(
    document.getElementById("rectangle-length-input").value
  );
  const width = parseFloat(
    document.getElementById("rectangle-width-input").value
  );
  const perimeter = 2 * (length + width);
  document.getElementById(
    "rectangle-perimeter-result"
  ).innerText = `Perimeter of Rectangle: ${perimeter.toFixed(2)}`;
}

function showRectangleDialog() {
  const length = parseFloat(
    document.getElementById("rectangle-length-input").value
  );
  const width = parseFloat(
    document.getElementById("rectangle-width-input").value
  );

  if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
    const area = length * width;
    const perimeter = 2 * (length + width);

    const title = "Rectangle Results";
    const message = `Area of Rectangle: ${area.toFixed(
      2
    )} <br> \nPerimeter of Rectangle: ${perimeter.toFixed(2)}`;

    showDialog(title, message); // Pass title and message to showDialog
  } else {
    showDialog(
      "Error",
      "Please enter valid positive numbers for length and width."
    );
  }
}
