document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
  // Function to show ShapesOperation when clicked
  function showShapesOperation() {
    // Hide other operations if necessary (not shown in this code)
    document.getElementById("ShapesOperation").classList.remove("hidden");
  }

=======
  registerTabsClick();
});

function registerTabsClick() {
>>>>>>> square-shape-component
  // Select all tab elements and tab-content elements
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  // Add a click event listener to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove the active class from all tabs and content sections
      tabs.forEach((item) => item.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked tab
      tab.classList.add("active");
<<<<<<< HEAD

      // Show the corresponding content section using the data-tab attribute
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});
=======
    });
  });
}
>>>>>>> square-shape-component
