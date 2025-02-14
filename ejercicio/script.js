document.addEventListener(
  "DOMContentLoaded",
  () => {
    const contrastButton = document.getElementById("toggle-contrast");
    const increaseFontButton = document.getElementById("increase-font");
    const decreaseFontButton = document.getElementById("decrease-font");
    const body = document.body;
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("feedback");
    // Crear manipuladores de eventos
    contrastButton.addEventListener(
      "click",
      (event) => {
        const isPressed = event.target.getAttribute("aria-pressed");
        if (isPressed === "true") {
          event.target.textContent = "Alto Contraste";
          document.querySelector("body").classList.remove("high-contrast");
          event.target.setAttribute("aria-pressed", "false");
        } else {
          document.querySelector("body").classList.add("high-contrast");
          event.target.textContent = "Normal Contraste";
          event.target.setAttribute("aria-pressed", "true");
        }
      },
      false
    );
    increaseFontButton.addEventListener(
      "click",
      (event) => {
        const actualFontSize = window.getComputedStyle(document.querySelector("body")).fontSize;
        let actualFontSizeValue = parseInt(actualFontSize.slice(0, actualFontSize.length - 2));
        document.querySelector("body").style.fontSize = actualFontSizeValue + 2 + "px";
      },
      false
    );
    decreaseFontButton.addEventListener(
      "click",
      () => {
        const actualFontSize = window.getComputedStyle(document.querySelector("body")).fontSize;
        let actualFontSizeValue = parseInt(actualFontSize.slice(0, actualFontSize.length - 2));
        if (actualFontSizeValue > 12) {
          document.querySelector("body").style.fontSize = actualFontSizeValue - 2 + "px";
        }
      },
      false
    );
  },
  false
);
