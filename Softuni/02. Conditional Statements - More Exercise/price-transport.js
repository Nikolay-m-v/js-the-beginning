"use strict";

function priceTransport(input) {
  let kilometers = Number(input[0]);
  let dayOrNight = input[1];
  let transport = "";
  let taxiStartingTax = 0.7;
  let taxiPricePerKm = 0.79;
  let busPricePerKm = 0.09;
  let trainPricePerKm = 0.06;

  let totalCost = 0;
  if (kilometers < 20) {
    transport = "taxi";
  } else if (kilometers > 20 && kilometers <= 100) {
    transport = "bus";
  } else {
    transport = "train";
  }
  if (dayOrNight === "day") {
    taxiPricePerKm = 0.79;
  } else {
    taxiPricePerKm = 0.9;
  }
  if (transport === "taxi") {
    totalCost = taxiStartingTax + taxiPricePerKm * kilometers;
  } else if (transport === "bus") {
    totalCost = busPricePerKm * kilometers;
  } else {
    totalCost = trainPricePerKm * kilometers;
  }
  console.log(totalCost.toFixed(2));
}

priceTransport(["5", "day"]);
priceTransport(["7", "night"]);
priceTransport(["180", "night"]);
