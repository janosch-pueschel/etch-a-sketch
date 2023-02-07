"use strict";

const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector("body");
const newGridBtn = document.createElement("button");
let numberOfSquares;

newGridBtn.textContent = "New Grid";
newGridBtn.addEventListener("click", () => {
  newNumberOfSquares();
  console.log(numberOfSquares);
  newGrid();
});
body.appendChild(newGridBtn);

for (let i = 0; i < 16 * 16; i++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  colorContainer.addEventListener("mouseover", () => {
    colorContainer.classList.add("color-container--hover");
  });
  gridContainer.appendChild(colorContainer);
}

function newNumberOfSquares() {
  numberOfSquares = 0;
  numberOfSquares = prompt(
    "How many squares do you want your new grid to have?"
  );
  if (numberOfSquares > 100) {
    alert("Maximum number of squares is 100.");
    numberOfSquares = prompt(
      "How many squares do you want your new grid to have?"
    );
  } else if (numberOfSquares < 1) {
    alert("Your new grid has to have at least 1 square.");
    numberOfSquares = prompt(
      "How many squares do you want your new grid to have?"
    );
  }
}

function newGrid() {
  gridContainer.innerHTML = "";
  for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    colorContainer.addEventListener("mouseover", () => {
      colorContainer.classList.add("color-container--hover");
    });
    gridContainer.style.cssText = `grid-template: repeat(${numberOfSquares}, 1fr) / repeat(${numberOfSquares}, 1fr);`;
    gridContainer.appendChild(colorContainer);
  }
}
