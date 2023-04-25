"use strict";

function housePainting(x, y, h) {
  let houseHeight = x;
  let houseWidthSides = y;
  let roofHeight = h;
  let doorSpaceOccupationHeight = 2;
  let doorSpaceOccupationWidth = 1.2;
  let sidesArea = houseHeight * houseWidthSides;
  let windowArea = 1.5 * 1.5;
  let houseAreaWithoutWindows = 2 * sidesArea - windowArea * 2;
  let backSide = houseHeight * houseHeight;
  let door = doorSpaceOccupationHeight * doorSpaceOccupationWidth;
  let frontAndBackSideArea = 2 * backSide - door;
  let totalArea = frontAndBackSideArea + houseAreaWithoutWindows;
  let greenPaintPerLitre = 3.4;
  let greenPaintCost = totalArea / greenPaintPerLitre;
  let roofArea = 2 * (houseHeight * houseWidthSides);
  let roofAreaTriangles = 2 * ((houseHeight * roofHeight) / 2);
  let totalRoofArea = roofArea + roofAreaTriangles;
  let redPaintCost = 4.3;
  let totalRedPaintCost = totalRoofArea / redPaintCost;
  let totalPaintCost = totalRedPaintCost + greenPaintCost;

  console.log(totalRedPaintCost.toFixed(2));
  console.log(greenPaintCost.toFixed(2));
  console.log(totalPaintCost.toFixed(2));
}

housePainting(6, 10, 5.2);
