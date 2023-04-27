"use strict";

function logistics(input) {
  let cargoAmount = input[0];
  let cargoWeight = 0;
  let microBus = 200;
  let withBus = 0;
  let truck = 175;
  let withTruck = 0;
  let train = 120;
  let withTrain = 0;
  let totalCost = 0;
  let totalWeight = 0;

  for (let i = 1; i < input.length; i++) {
    cargoWeight = input[i];
    totalWeight += cargoWeight;
    if (cargoWeight < 4) {
      withBus += cargoWeight;
      totalCost += microBus * cargoWeight;
    } else if (cargoWeight > 3 && cargoWeight < 12) {
      withTruck += cargoWeight;
      totalCost += truck * cargoWeight;
    } else {
      withTrain += cargoWeight;
      totalCost += train * cargoWeight;
    }
  }
  let percentageBus = (withBus / totalWeight) * 100;
  let percentageTruck = (withTruck / totalWeight) * 100;
  let percentageTrain = (withTrain / totalWeight) * 100;
  totalCost /= totalWeight;
  console.log(`Average per ton is ${totalCost.toFixed(2)}`);
  console.log(`With bus = ${percentageBus.toFixed(2)}%`);
  console.log(`With truck = ${percentageTruck.toFixed(2)}%`);
  console.log(`With train = ${percentageTrain.toFixed(2)}%`);
}

logistics([4, 1, 5, 16, 3]);
