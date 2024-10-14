// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("close-dialog-button")
      .addEventListener("click", hideDialog);
  
    const dialogContainer = document.querySelector(".dialog-container");
  
    dialogContainer.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        hideDialog();
      }
    });
  });
  
  // Show dialog with the result
  function showDialog(title, message) {
    // Set dialog title and message
    document.getElementById("dialog-title").innerText = title;
    document.getElementById("dialog-message").innerHTML = message;
  
    // Show dialog container
    const dialogBox = document.getElementById("dialog-container")
  
    // Show dialog box
    dialogBox.classList.remove("hidden");

    dialogBox.focus();
  
    // setTimeout(() => {
    //   hideDialog();
    // }, 10000);
  }
  
  // Hide dialog
  function hideDialog() {
    document.getElementById("dialog-container").classList.add("hidden");
  }
  
  function isDialogBoxHidden() {
    const isHidden = document.getElementById("dialog-container").classList.contains('hidden')
    return isHidden;
  }
  