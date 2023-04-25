"use strict";

function fuelTankTwo(input) {
  let fuelType = input[0];
  let fuelAmount = input[1];
  let clubCard = input[2];

  let priceLiterGasoline = 2.22;
  let priceLiterDiesel = 2.33;
  let priceLiterGas = 0.93;

  let totalCost = 0;

  if (clubCard === "yes") {
    priceLiterGasoline -= 0.18;
    priceLiterDiesel -= 0.12;
    priceLiterGas -= 0.08;
  }
  if (fuelType === "gasoline") {
    totalCost = fuelAmount * priceLiterGasoline;
  } else if (fuelType === "diesel") {
    totalCost = fuelAmount * priceLiterDiesel;
  } else if (fuelType === "gas") {
    totalCost = fuelAmount * priceLiterGas;
  }

  if (fuelAmount >= 20 && fuelAmount <= 25) {
    totalCost -= totalCost * 0.08;
  } else if (fuelAmount > 25) {
    totalCost -= totalCost * 0.1;
  }

  console.log(`${totalCost.toFixed(2)} lv.`);
}

fuelTankTwo(["gas", 30, "yes"]);
fuelTankTwo(["gasoline", 25, "no"]);
fuelTankTwo(["diesel", 19, "no"]);
