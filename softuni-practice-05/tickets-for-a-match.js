"use strict";

function ticketsForTheMatch(input) {
  let budget = Number(input[0]);
  let typeOfSeat = String(input[1]);
  let amountOfSeats = Number(input[2]);
  let pricePerSeat = 0;
  let moneyForTransport = 0;

  if (typeOfSeat === "VIP") {
    pricePerSeat = 499.99;
  } else {
    pricePerSeat = 249.99;
  }

  if (amountOfSeats <= 4) {
    moneyForTransport = budget * 0.75;
  } else if (amountOfSeats >= 5 && amountOfSeats <= 9) {
    moneyForTransport = budget * 0.6;
  } else if (amountOfSeats >= 10 && amountOfSeats <= 24) {
    moneyForTransport = budget * 0.5;
  } else if (amountOfSeats >= 25 && amountOfSeats <= 49) {
    moneyForTransport = budget * 0.4;
  } else {
    moneyForTransport = budget * 0.25;
  }

  let moneySpent = moneyForTransport + amountOfSeats * pricePerSeat;
  let moneyLeftOrNeeded = budget - moneySpent;
  let moneyLeftOrNeededFormatted = Math.abs(moneyLeftOrNeeded.toFixed(2));

  if (budget >= moneySpent) {
    console.log("Yes! You have " + moneyLeftOrNeededFormatted + " leva left");
  } else {
    console.log(
      "Not enough money ! You need " + moneyLeftOrNeededFormatted + " leva"
    );
  }
}

ticketsForTheMatch(["1000", "normal", "1"]);
// ticketsForTheMatch(["30000", "VIP", "49"]);
