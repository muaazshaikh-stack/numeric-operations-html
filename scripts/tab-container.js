document.addEventListener("DOMContentLoaded", () => {
  registerTabsClick();
});

function registerTabsClick() {
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
    });
  });
}
