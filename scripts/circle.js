document.addEventListener("DOMContentLoaded", () => {
  // Validate the input for the circle radius
  document
    .getElementById("circle-radius-input")
    .addEventListener("input", validateCircleInput);

  // Calculate area of the circle
  document
    .getElementById("circle-area-btn")
    .addEventListener("click", calculateCircleArea);

  // Calculate circumference of the circle
  document
    .getElementById("circle-circumference-btn")
    .addEventListener("click", calculateCircleCircumference);

  // Handle pressing Enter in the input field
  document
    .getElementById("circle-radius-input")
    .addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const radiusInput = document.getElementById(
          "circle-radius-input"
        ).value;
        if (isRealNumber(radiusInput)) {
          showCircleResultInDialogBox();
        }
      }
    });
});

function validateCircleInput() {
  const radiusInput = document.getElementById("circle-radius-input").value;
  const areaBtn = document.getElementById("circle-area-btn");
  const circumferenceBtn = document.getElementById("circle-circumference-btn");

  if (isRealNumber(radiusInput)) {
    areaBtn.disabled = false;
    circumferenceBtn.disabled = false;
  } else {
    areaBtn.disabled = true;
    circumferenceBtn.disabled = true;
  }
}

function calculateCircleArea() {
  try {
    document.getElementById("circle-circumference-result").innerText = "";
    const area = getCircleArea();
    showCircleAreaResult(area);
  } catch (error) {
    alert(error);
  }
}

function calculateCircleCircumference() {
  try {
    document.getElementById("circle-area-result").innerText = "";
    const circumference = getCircleCircumference();
    showCircleCircumferenceResult(circumference);
  } catch (error) {
    alert(error);
  }
}

function showCircleResultInDialogBox() {
  const title = "Circle Area and Circumference";

  const area = getCircleArea();
  const circumference = getCircleCircumference();

  /**
   * Area of circle = ${area}
   * Circumference of circle = ${circumference}
   */
  let message = `Area of circle = ${area}<br>`;
  message += `Circumference of circle = ${circumference}`;

  showDialog(title, message);
}

function getCircleArea() {
  const inputValue = document.getElementById("circle-radius-input").value;
  const radius = parseFloat(inputValue);

  const area = Math.PI * radius * radius;

  return area.toFixed(2);
}

function getCircleCircumference() {
  const inputValue = document.getElementById("circle-radius-input").value;
  const radius = parseFloat(inputValue);

  const circumference = 2 * Math.PI * radius;

  return circumference.toFixed(2);
}

function showCircleAreaResult(area) {
  // Show result on label
  document.getElementById(
    "circle-area-result"
  ).innerText = `Area of Circle: ${area}`;
}

function showCircleCircumferenceResult(circumference) {
  // Show result on label
  document.getElementById(
    "circle-circumference-result"
  ).innerText = `Circumference of Circle: ${circumference}`;
}
