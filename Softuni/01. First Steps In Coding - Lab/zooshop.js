"use strict";

function zooshop(input) {
  let pricePerPackageForDog = 2.5;
  let pricePerPackageForCat = 4;
  let dogPackagesNeeded = Number(input[0]);
  let catPackagesNeeded = Number(input[1]);
  let sum =
    pricePerPackageForCat * catPackagesNeeded +
    pricePerPackageForDog * dogPackagesNeeded;
  console.log(`${sum} lv.`);
}

zooshop(["5", "4"]);
