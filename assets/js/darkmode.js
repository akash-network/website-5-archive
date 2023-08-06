const mode = document.getElementById("mode");

if (mode !== null) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-dark-mode", "");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.removeAttribute("data-dark-mode");
      }
    });

  mode.addEventListener("click", () => {
    document.documentElement.toggleAttribute("data-dark-mode");
    localStorage.setItem(
      "theme",
      document.documentElement.hasAttribute("data-dark-mode") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-dark-mode", "");
  } else {
    document.documentElement.removeAttribute("data-dark-mode");
  }
}

const modeSmall = document.getElementById("mode-small-device");

if (modeSmall !== null) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-dark-mode", "");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.removeAttribute("data-dark-mode");
      }
    });

  modeSmall.addEventListener("click", () => {
    console.log("clicked small");
    document.documentElement.toggleAttribute("data-dark-mode");
    localStorage.setItem(
      "theme",
      document.documentElement.hasAttribute("data-dark-mode") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-dark-mode", "");
  } else {
    document.documentElement.removeAttribute("data-dark-mode");
  }
}
