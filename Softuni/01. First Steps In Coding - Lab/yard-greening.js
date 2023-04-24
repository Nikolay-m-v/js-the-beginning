"use strict";

function yardGreening(input) {
  let pricePerSquareMeter = 7.61;
  let squareMeters = Number(input[0]);
  let totalCostBeforeDiscount = squareMeters * pricePerSquareMeter;
  let totalCost = (totalCostBeforeDiscount -= totalCostBeforeDiscount * 0.18);
  console.log(totalCost);
}

yardGreening(["550"]);
