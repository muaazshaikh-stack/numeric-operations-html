registerRequiredInputNumber();

document
  .getElementById("square-side-input")
  .addEventListener("input", function () {
    validateSquareInput(this);
  });

document
  .getElementById("square-area-btn")
  .addEventListener("click", calculateSquareArea);

document
  .getElementById("square-perimeter-btn")
  .addEventListener("click", calculateSquarePerimeter);

document
  .getElementById("square-side-input")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const sideInput = document.getElementById("square-side-input").value;
      if (isRealNumber(sideInput)) {
        showSquareResultInDialogBox();
      }
      // loadShapesComponent("square");
    }
  });

function validateSquareInput(element) {
  // Get the value of the square side input
  const sideInput = element.value;

  // Get the area and perimeter buttons
  const areaBtn = document.getElementById("square-area-btn");
  const perimeterBtn = document.getElementById("square-perimeter-btn");

  // Check if the input is a valid real number
  const isValid = isRealNumber(sideInput);

  if (
    isValid &&
    areaBtn !== undefined &&
    areaBtn !== null &&
    perimeterBtn !== undefined &&
    perimeterBtn !== null
  ) {
    // Enable the buttons
    areaBtn.disabled = false;
    perimeterBtn.disabled = false;
  } else {
    // Add input error class list and disable the buttons
    areaBtn.disabled = true;
    perimeterBtn.disabled = true;
  }
}

function calculateSquareArea() {
  try {
    document.getElementById("square-perimeter-result").innerText = "";
    const area = getSqaureArea();
    showSquareAreaResult(area);
  } catch (error) {
    alert(error);
  }
}

function calculateSquarePerimeter() {
  try {
    document.getElementById("square-area-result").innerText = "";
    const perimeter = getSquarePerimeter();
    showSquarePerimeterResult(perimeter);
  } catch (error) {
    alert(error);
  }
}

function showSquareResultInDialogBox() {
  const title = "Square Area and Perimeter";

  const area = getSqaureArea();
  const perimeter = getSquarePerimeter();

  /**
   * Area of circle = ${area}
   * Perimeter of circle = ${perimeter}
   */

  let message = `Area of circle = ${area}<br>`;
  message += `Perimeter of circle = ${perimeter}`;

  showDialog(title, message);
}

function getSqaureArea() {
  const inputValue = document.getElementById("square-side-input").value;
  const sideLength = parseFloat(inputValue);

  const area = sideLength * sideLength;

  return area.toFixed(2);
}

function getSquarePerimeter() {
  const inputValue = document.getElementById("square-side-input").value;
  const sideLength = parseFloat(inputValue);

  const perimeter = 4 * sideLength;

  return perimeter.toFixed(2);
}

function showSquareAreaResult(area) {
  // Show result on label
  document.getElementById(
    "square-area-result"
  ).innerText = `Area of Square: ${area}`;
}

function showSquarePerimeterResult(perimeter) {
  // Show result on label
  document.getElementById(
    "square-perimeter-result"
  ).innerText = `Perimeter of Square: ${perimeter}`;
}
