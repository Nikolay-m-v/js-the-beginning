"use strict";

function trainingLab(h, w) {
  let widthCm = w * 100;
  let heightCm = h * 100;
  let coridorWidth = 100;
  let deskWidth = 70;
  let rowHeight = 120;
  let remainingWidth = widthCm - coridorWidth;
  let numberRows = heightCm / rowHeight;
  console.log(numberRows);
  let desksPossibleToPut = remainingWidth / deskWidth;
  console.log(desksPossibleToPut);
  let placesLostForDoorAndCathedral = 3;

  let totalWorkingPlaces =
    Math.floor(numberRows) * Math.floor(desksPossibleToPut) -
    placesLostForDoorAndCathedral;
  console.log(totalWorkingPlaces);
}

trainingLab(15, 8.9);
