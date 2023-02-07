"use strict";

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) {
  let colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  gridContainer.appendChild(colorContainer);
}
