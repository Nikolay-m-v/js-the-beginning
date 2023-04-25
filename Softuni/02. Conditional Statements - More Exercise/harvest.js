"use strict";

function harvest(input) {
  let squareMeters = input[0];
  let grapeForSquareMeter = input[1];
  let wineLitresNeeded = input[2];
  let workers = input[3];
  let grapeKgNeededFor1LitreWine = 2.5;
  let harvest = squareMeters * grapeForSquareMeter;
  let harvestForWine = harvest * 0.4;
  let wineMade = harvestForWine / grapeKgNeededFor1LitreWine;
  let wineNeeded = Math.abs(wineMade - wineLitresNeeded);

  if (wineMade < wineLitresNeeded) {
    console.log(
      `It will be a tough winter! More ${Math.floor(
        wineNeeded
      )} liters wine needed.`
    );
  } else if (wineMade >= wineLitresNeeded) {
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(wineMade)} liters.`
    );
    let wineLeft = wineMade - wineLitresNeeded;
    let workersSplit = wineLeft / workers;
    console.log(`${wineLeft} liters left -> ${workersSplit} per worker.`);
  }
}

harvest([650, 2, 175, 3]);
harvest([1020, 1.5, 425, 4]);
