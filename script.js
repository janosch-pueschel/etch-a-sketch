"use strict";

const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector("body");
let mouseClicked = false;

gridContainer.addEventListener("mousedown", () => {
  mouseClicked = true;
  console.log(mouseClicked);
});
gridContainer.addEventListener("mouseup", () => {
  mouseClicked = false;
  console.log(mouseClicked);
});

function renderGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    colorContainer.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(colorContainer);
  }
}
renderGrid();

function changeColor() {
  if (mouseClicked === true) {
    this.style.backgroundColor = "black";
  }
}

// Functions to render new grid using user input
let numberOfSquares;
function newNumberOfSquares() {
  numberOfSquares = 0;
  numberOfSquares = prompt(
    "How many squares do you want your new grid to have?"
  );
  if (numberOfSquares > 100) {
    alert("Maximum number of squares is 100.");
    newNumberOfSquares();
  } else if (numberOfSquares < 1) {
    alert("Your new grid has to have at least 1 square.");
    newNumberOfSquares();
  }
}

function newGrid() {
  gridContainer.innerHTML = "";
  for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    colorContainer.addEventListener("mouseover", changeColor);
    gridContainer.style.cssText = `grid-template: repeat(${numberOfSquares}, 1fr) / repeat(${numberOfSquares}, 1fr);`;
    gridContainer.appendChild(colorContainer);
  }
}

const newGridBtn = document.createElement("button");
newGridBtn.textContent = "New Grid";
body.appendChild(newGridBtn);
newGridBtn.addEventListener("click", () => {
  newNumberOfSquares();
  newGrid();
});
