"use strict";

const gridContainer = document.querySelector(".main__grid-container");
const body = document.querySelector("body");
let mouseClicked = false;

window.addEventListener("mousedown", () => {
  mouseClicked = true;
});
window.addEventListener("mouseup", () => {
  mouseClicked = false;
});

function renderGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    colorContainer.addEventListener("mouseover", changeColor);
    colorContainer.addEventListener("mousedown", function (event) {
      event.preventDefault();
      getColor();
      colorContainer.style.backgroundColor = color;
    });
    gridContainer.appendChild(colorContainer);
  }
}
renderGrid();

// Functions to render new grid using user input

function newGrid() {
  let numberOfSquares = gridRangeInput.value;
  if (numberOfSquares === null) {
    return;
  } else {
    gridContainer.innerHTML = "";
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
      const colorContainer = document.createElement("div");
      colorContainer.classList.add("color-container");
      colorContainer.addEventListener("mouseover", changeColor);
      gridContainer.style.cssText = `grid-template: repeat(${numberOfSquares}, 1fr) / repeat(${numberOfSquares}, 1fr);`;
      gridContainer.appendChild(colorContainer);
    }
  }
}

const newGridBtn = document.getElementById("new-grid-btn");
newGridBtn.addEventListener("click", newGrid);

const gridRangeInput = document.getElementById("new-grid-range");
const rangeValue = document.getElementById("range-input");
gridRangeInput.addEventListener("input", () => {
  rangeValue.textContent = `${gridRangeInput.value} x ${gridRangeInput.value}`;
  console.log(gridRangeInput.value);
});

const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("click", () => {
  randomColorBtn.disabled = false;
  eraserBtn.disabled = false;
});

const randomColorBtn = document.getElementById("rainbow-color-btn");
randomColorBtn.addEventListener("click", () => {
  randomColorBtn.disabled = true;
  eraserBtn.disabled = false;
  colorPicker.disabled = false;
});

const eraserBtn = document.getElementById("eraser-btn");
eraserBtn.addEventListener("click", () => {
  eraserBtn.disabled = true;
  randomColorBtn.disabled = false;
  colorPicker.disabled = false;
});

let color;

function getColor() {
  if (eraserBtn.disabled === true) {
    color = "#f4f0e8";
  } else if (randomColorBtn.disabled === true) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    color = `rgb(${r}, ${g}, ${b})`;
  } else {
    color = colorPicker.value;
  }
  return color;
}

function changeColor() {
  getColor();
  if (mouseClicked === true) {
    this.style.backgroundColor = color;
  }
}
