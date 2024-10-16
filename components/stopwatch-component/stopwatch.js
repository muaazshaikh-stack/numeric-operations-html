if (window.sec === undefined) {
  var sec = 0;
} else {
  sec = 0;
}

if (window.min === undefined) {
  var min = 0;
} else {
  min = 0;
}

if (window.hr === undefined) {
  var hr = 0;
} else {
  hr = 0;
}

if (window.timerId === undefined) {
  var timerId = null;
} else {
  timerId = null;
}

// Function to update the display in hour:min:sec format
function updateStopwatchDisplay() {
  const timeLabel = document.getElementById("lbl-time"); // Get the label element

  // Format time components to always show two digits
  const formattedHour = hr.toString().padStart(2, "0");
  const formattedMinute = min.toString().padStart(2, "0");
  const formattedSecond = sec.toString().padStart(2, "0");

  // Update the label with the formatted time
  timeLabel.innerText = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

function startWatch() {
  sec++; // Increase seconds

  if (sec >= 60) {
    min++; // Increase minutes when seconds reach 60
    sec = 0; // Reset seconds
  }

  if (min >= 60) {
    hr++; // Increase hours when minutes reach 60
    min = 0; // Reset minutes
  }

  updateStopwatchDisplay(); // Update the display after time changes

  // Set up the timer to call this function again after 1 second
  timerId = setTimeout(startWatch, 1000);
}

function stopWatch() {
  clearTimeout(timerId); // Stop the timer
}

// Function to reset the stopwatch
function resetWatch() {
  sec = 0;
  min = 0;
  hr = 0;

  updateStopwatchDisplay(); // Update display after resetting time
}

// Functions to add time
function addSecond() {
  sec++;

  if (sec >= 60) {
    min++;
    sec = 0;
  }

  if (min >= 60) {
    hr++;
    min = 0;
    sec = 0;
  }

  if (hr >= 24) {
    sec = 0;
    min = 0;
    hr = 0;
  }

  updateStopwatchDisplay();
}

function addMinute() {
  min++;

  if (min >= 60) {
    hr++;
    min = 0;
    sec = 0;
  }

  if (hr >= 24) {
    sec = 0;
    min = 0;
    hr = 0;
  }

  updateStopwatchDisplay();
}

function addHour() {
  hr++;

  if (hr >= 24) {
    sec = 0;
    min = 0;
    hr = 0;
  }
  updateStopwatchDisplay();
}

/**
 * Add event listeners to buttons
 */
document.getElementById("btn-start").addEventListener("click", () => {
  if (timerId === null) {
    startWatch(); // Start the count-up process
  }
});

document.getElementById("btn-stop").addEventListener("click", () => {
  stopWatch(); // Stop the count-up process
  timerId = null; // Reset timerId so that it can start again
});

document.getElementById("btn-add-sec").addEventListener("click", () => {
  addSecond(); // Add 1 second
});

document.getElementById("btn-add-min").addEventListener("click", () => {
  addMinute(); // Add 1 minute
});

document.getElementById("btn-add-hr").addEventListener("click", () => {
  addHour(); // Add 1 hour
});

document.getElementById("btn-reset").addEventListener("click", () => {
  resetWatch(); // Reset the stopwatch to 00:00:00
});
