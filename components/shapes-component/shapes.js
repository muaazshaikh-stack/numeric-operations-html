registerTabsClick();

function onSquareTabClick() {
  loadShapeItemsComponent("square");
}

function onRectangleClick() {
  loadShapeItemsComponent("rectangle");
}

function onCircleClick() {
  loadShapeItemsComponent("circle");
}

function loadShapeItemsComponent(shape) {
  const shapeConfigs = {
    square: {
      htmlUrl: "components/shapes-component/square-component/square.html",
      jsUrl: "components/shapes-component/square-component/square.js",
    },
    rectangle: {
      htmlUrl: "components/shapes-component/rectangle-component/rectangle.html",
      jsUrl: "components/shapes-component/rectangle-component/rectangle.js",
    },
    circle: {
      htmlUrl: "components/shapes-component/circle-component/circle.html",
      jsUrl: "components/shapes-component/circle-component/circle.js",
    },
  };

  const config = shapeConfigs[shape];

  if (!config) {
    console.error("Unknown shape: " + shape);
    return;
  }

  // Load HTML and JS using a utility function
  loadShapeItemComponent(config.htmlUrl, config.jsUrl);
}

function loadShapeItemComponent(htmlUrl, jsUrl) {
  try {
    // Fetch the HTML component
    fetch(htmlUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch HTML: ${response.statusText}`);
        }
        return response.text();
      })
      .then((html) => {
        // Insert the HTML into the router outlet
        const routerOutlet = document.getElementById("shape-router-outlet");
        routerOutlet.innerHTML = ""; // Clear existing content
        routerOutlet.insertAdjacentHTML("afterbegin", html);

        // Load the associated JS file
        loadShapeItemScript(jsUrl);
      })
      .catch((error) => {
        console.error("Error loading component:", error);
      });
  } catch (error) {
    console.error(error);
  }
}
// // Check if any component already loaded at <router-outlet> placeholder, if yes then remove the component (html)
function loadShapeItemScript(src) {
  const alreadyLoadedComponentScript =
    document.getElementById("shape-item-script");

  if (!!alreadyLoadedComponentScript) {
    alreadyLoadedComponentScript.remove();
  }

  const script = document.createElement("script");
  script.id = "shape-item-script";
  script.src = src;
  script.type = "text/javascript";
  document.body.appendChild(script);
}
