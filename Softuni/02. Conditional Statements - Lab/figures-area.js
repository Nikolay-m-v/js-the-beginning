"use strict";

function figuresArea(input) {
  let figureType = input[0];
  let figureArea = Number(input[1]);
  let figureAreaSides = Number(input[2]);
  let totalArea = 0;

  if (figureType === "square") {
    totalArea = figureArea * figureArea;
  } else if (figureType === "rectangle") {
    totalArea = figureArea * figureAreaSides;
  } else if (figureType === "circle") {
    totalArea = Math.PI * Math.pow(figureArea, 2);
  } else if (figureType === "triangle") {
    totalArea = (figureArea * figureAreaSides) / 2;
  }
  console.log(totalArea.toFixed(3));
}

figuresArea(["square", "5"]);
figuresArea(["rectangle", "7", "2.5"]);
figuresArea(["triangle", "4.5", "20"]);
figuresArea(["circle", "6"]);
