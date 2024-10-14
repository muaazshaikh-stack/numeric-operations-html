document.addEventListener("DOMContentLoaded", () => {
  registerRequiredInputNumber();

  // Disable all submit buttons initially
  // document.querySelectorAll('button[type="submit"]').forEach((button) => {
  //   button.disabled = true;
  // });

  // Initially when no operation is selected, load no operation html
  loadNoOperationComponent();

  /**
   * Subscribe to event 'keyup' of all text inputs for validation
   */
  document.querySelectorAll('input[type="text"]').forEach((element) => {
    element.addEventListener("keyup", () => {
      const isInteger = isRealNumber(element.value);

      const button = element
        .closest("div.operation-item-container")
        .querySelector(".operation-button");

      if (isInteger && button !== undefined && button !== null) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });

  // Add listener for 'Find Prime Number' navigation
  document
    .querySelectorAll(
      "#sideNavItemPrimeNumber, #topNavItemPrimeNumber, #ddlMenuItemPrimeNumber"
    )
    .forEach((navItem) => {
      navItem.addEventListener("click", () => {
        if (!!navItem.dataset.operation) {
          const operation = navItem.dataset.operation;
          operationItemClicked(operation);

          // load Prime Number Component
          loadFindPrimerNumberComponent();
        }
      });
    });

  // Add listener for 'Calculate Factorial' navigartion
  document
    .querySelectorAll(
      "#sideNavItemFactorial, #topNavItemFactorial, #ddlMenuItemFactorial"
    )
    .forEach((navItem) => {
      navItem.addEventListener("click", () => {
        if (!!navItem.dataset.operation) {
          const operation = navItem.dataset.operation;
          operationItemClicked(operation);

          loadCalculateFactorialComponent();
        }
      });
    });

  // Add listener for 'Find SquareRoot ' navigation
  document
    .querySelectorAll(
      "#sideNavItemSquareRoot, #topNavItemSquareRoot, #ddlMenuItemSquareRoot"
    )
    .forEach((navItem) => {
      navItem.addEventListener("click", () => {
        if (!!navItem.dataset.operation) {
          const operation = navItem.dataset.operation;
          operationItemClicked(operation);

          loadFindSquareRootComponent();
        }
      });
    });

  // Add listener for 'Shapes ' navigation
  document
    .querySelectorAll(
      "#sideNavItemShapes, #topNavItemShapes, #ddlMenuItemShapes"
    )
    .forEach((navItem) => {
      navItem.addEventListener("click", () => {
        if (!!navItem.dataset.operation) {
          const operation = navItem.dataset.operation;
          operationItemClicked(operation);

          loadShapesComponent();
        }
      });
    });

  // Add listener for 'Stopwatch ' navigation
  document
    .querySelectorAll(
      "#sideNavItemStopwatch, #topNavItemStopwatch, #ddlMenuItemStopwatch"
    )
    .forEach((navItem) => {
      navItem.addEventListener("click", () => {
        if (!!navItem.dataset.operation) {
          const operation = navItem.dataset.operation;
          operationItemClicked(operation);

          loadStopWatchComponent();
        }
      });
    });
});

/**
 * Function to toggle side navigation visibility
 */
function toggleSideNav() {
  document.getElementById("side-nav-container").classList.toggle("collapsed");

  document.getElementById("user-logo-container").classList.toggle("hidden");
  document.getElementById("operations-header").classList.toggle("hidden");

  document.getElementById("prime-number-link").classList.toggle("hidden");
  document.getElementById("factorial-link").classList.toggle("hidden");
  document.getElementById("sqrt-link").classList.toggle("hidden");
  document.getElementById("shapes-link").classList.toggle("hidden");
  document.getElementById("stopwatch-link").classList.toggle("hidden");

  const items = document.querySelectorAll("div.burger-button i");
  items.forEach((item) => {
    item.classList.toggle("hidden");
  });
}

/**
 * Function to handle side navigation item click
 */
function operationItemClicked(operation) {
  /**
   * Side navigation
   */
  document
    .querySelectorAll("div.nav-list-item-container .nav-list-item-selection")
    .forEach((selection) => {
      selection.classList.add("v-hidden");
    });

  document
    .querySelector("#sideNavItem" + operation + " .nav-list-item-selection")
    .classList.remove("v-hidden");

  /**
   * Top navigation
   */
  document
    .querySelectorAll("div.top-nav-items-container a")
    .forEach((topNavItem) => {
      topNavItem.classList.remove("selected");
    });

  document.querySelector("#topNavItem" + operation).classList.add("selected");

  /**
   * Dropdown navigation
   */

  document.querySelectorAll("div.dropdown-content-item").forEach((menuItem) => {
    menuItem.classList.remove("active");
  });

  document.querySelector("#ddlMenuItem" + operation).classList.add("active");

  /**
   * Operation item
   */
  // document.querySelectorAll("div.operation-item").forEach((operationItem) => {
  //   operationItem.classList.add("hidden");
  // });

  // document
  //   .querySelector("#" + operation + "Operation")
  //   .classList.remove("hidden");
}

/**
 * Function to toggle dropdown visibility
 */
function toggleDropdown() {
  var dropdownContent = document.getElementById("operation-dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

/**
 * Function to check if the value is an integer number.
 */
function isRealNumber(value) {
  return /^[-+]?[0-9]*\.?[0-9]+$/.test(value); // Regular expression to check for integer
}

function loadNoOperationComponent() {
  const url = "components/no-operation-component/no-operation.html";
  loadComponent(url);
}

function loadFindPrimerNumberComponent() {
  const htmlUrl =
    "components/find-prime-number-component/find-prime-number.html";

  const jsUrl = "components/find-prime-number-component/find-prime-number.js";

  loadComponent(htmlUrl, jsUrl);
}

function loadCalculateFactorialComponent() {
  const htmlUrl =
    "components/calculate-factorial-component/calculate-factorial.html";

  const jsUrl =
    "components/calculate-factorial-component/calculate-factorial.js";

  loadComponent(htmlUrl, jsUrl);
}

function loadFindSquareRootComponent() {
  const htmlUrl = "components/find-square-root-component/find-square-root.html";

  const jsUrl = "components/find-square-root-component/find-square-root.js";

  loadComponent(htmlUrl, jsUrl);
}

function loadStopWatchComponent() {
  const htmlUrl = "components/stopwatch-component/stopwatch.html";
  const jsUrl = "components/stopwatch-component/stopwatch.js";

  loadComponent(htmlUrl, jsUrl);
}

function loadShapesComponent() {
  const htmlUrl = "components/shapes-component/shapes.html";
  const jsUrl = "components/shapes-component/shapes.js";

  loadComponent(htmlUrl, jsUrl);
}

function loadComponent(url, scriptUrl) {
  // Fetch the component html
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        return null;
      }
    })
    .then((htmlComponent) => {
      if (!!htmlComponent) {
        /**
         * Show the newly loaded component at <router-outlet> placeholder
         */

        const routerOutletCollection =
          document.getElementsByTagName("router-outlet");

        if (!!routerOutletCollection && routerOutletCollection.length > 0) {
          const routerOutlet = routerOutletCollection[0];

          // Check if any component already loaded at <router-outlet> placeholder, if yes then remove the component (html)
          const alreadyLoadedComponent = routerOutlet.nextElementSibling;
          if (!!alreadyLoadedComponent) {
            alreadyLoadedComponent.remove();

            const alreadyLoadedComponentScript =
              document.getElementById("component-script");

            if (!!alreadyLoadedComponentScript) {
              alreadyLoadedComponentScript.remove();
            }
          }

          // Add the new loaded component at <router-outlet> placeholder
          routerOutlet.insertAdjacentHTML("afterEnd", htmlComponent);

          // Now load the js file
          if (!!scriptUrl) {
            const script = document.createElement("script");
            script.id = "component-script";
            script.type = "text/javascript";
            script.src = scriptUrl;

            document.body.appendChild(script);
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function registerRequiredInputNumber() {
  const inputs = document.querySelectorAll("input.required");
  inputs.forEach((input) => {
    // Add event listener for text input
    input.addEventListener("input", () => {
      // Check input has valid number
      const isValid = isRealNumber(input.value);

      if (isValid) {
        // Remove error css
        input.classList.remove("input-error");
      } else {
        // Add error css
        input.classList.add("input-error");
      }
    });
  });
}
