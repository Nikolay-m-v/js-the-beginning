"use strict";

// Марин и Нели си купуват къща не далеч от София.
// Нели толкова много обича цветята, че Ви убеждава да напишете функция, която да изчисли колко  ще им струва,
// да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени.

function newHome(params) {
  let pricePerRose = 5;
  let pricePerDahlia = 3.8;
  let pricePerTulip = 2.8;
  let pricePerNarcissus = 3;
  let pricePerGladius = 2.5;
  let pricePerFlowerYouAreBuying = 0;
  let typeOfFlowerToBuy = String(params[0]);
  let amountToBuy = Number(params[1]);
  let budget = Number(params[2]);

  if (typeOfFlowerToBuy === "Roses") {
    pricePerFlowerYouAreBuying = 5;
  } else if (typeOfFlowerToBuy === "Dahlias") {
    pricePerFlowerYouAreBuying = 3.8;
  } else if (typeOfFlowerToBuy === "Tulips") {
    pricePerFlowerYouAreBuying = 2.8;
  } else if (typeOfFlowerToBuy === "Narcissus") {
    pricePerFlowerYouAreBuying = 3;
  } else if (typeOfFlowerToBuy === "Gladius") {
    pricePerFlowerYouAreBuying = 2.5;
  }

  let totalSpent = amountToBuy * pricePerFlowerYouAreBuying;

  if (typeOfFlowerToBuy === "Roses" && amountToBuy > 80) {
    totalSpent -= totalSpent * 0.1;
  } else if (typeOfFlowerToBuy === "Dahlias" && amountToBuy > 90) {
    totalSpent -= totalSpent * 0.15;
  } else if (typeOfFlowerToBuy === "Tulips" && amountToBuy > 80) {
    totalSpent -= totalSpent * 0.15;
  } else if (typeOfFlowerToBuy === "Narcissus" && amountToBuy < 120) {
    totalSpent += totalSpent * 0.15;
  } else if (typeOfFlowerToBuy === "Gladius" && amountToBuy < 80) {
    totalSpent += totalSpent * 0.2;
  }

  let moneyLeftOrNeeded = budget - totalSpent;
  let moneyLeftOrNeededFormatted = Math.abs(moneyLeftOrNeeded).toFixed(2);

  if (totalSpent > budget) {
    console.log(
      "Not enough money, you need " + moneyLeftOrNeededFormatted + " leva more."
    );
  } else {
    console.log(
      "Hey, you have a great garden with " +
        amountToBuy +
        " " +
        typeOfFlowerToBuy +
        " and " +
        moneyLeftOrNeededFormatted +
        " leva left."
    );
  }

  console.log();
}

newHome(["Roses", "55", "250"]);
newHome(["Tulips", "88", "260"]);
newHome(["Narcissus", "119", "360"]);
