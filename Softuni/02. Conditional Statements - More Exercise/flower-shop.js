"use strict";

function flowerShop(input) {
  let magnolias = input[0];
  let hyacinths = input[1];
  let roses = input[2];
  let cactuses = input[3];
  let priceOfGift = input[4];

  let pricePerMagnolia = 3.25;
  let pricePerHyacinths = 4;
  let pircePerRose = 3.5;
  let pricePerCactus = 8;

  let total =
    magnolias * pricePerMagnolia +
    hyacinths * pricePerHyacinths +
    roses * pircePerRose +
    cactuses * pricePerCactus;
  let tax = 0.05;
  total -= total * tax;
  let moneyLeftOrNeeded = total - priceOfGift;
  let moneyLeftOrNeededAbs = Math.abs(moneyLeftOrNeeded);

  if (total > priceOfGift) {
    console.log(`She is left with ${Math.floor(moneyLeftOrNeededAbs)} leva.`);
  } else {
    console.log(
      `She will have to borrow ${Math.ceil(moneyLeftOrNeededAbs)} leva.`
    );
  }
}

flowerShop([2, 3, 5, 1, 50]);
