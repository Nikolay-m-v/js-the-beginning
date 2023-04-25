"use strict";

function fuelTank(input) {
  let fuelType = input[0];
  let litersFuel = input[1];

  if (fuelType !== "diesel" && fuelType !== "gasoline" && fuelType !== "gas") {
    console.log("Invalid fuel!");
    return;
  }

  if (litersFuel > 25) {
    console.log(`You have enough ${fuelType}`);
  } else {
    console.log(`Fill your tank with ${fuelType}`);
  }
}

fuelTank(["diesel", 10]);
fuelTank(["gas", 25]);
fuelTank(["kerosene", 200]);
