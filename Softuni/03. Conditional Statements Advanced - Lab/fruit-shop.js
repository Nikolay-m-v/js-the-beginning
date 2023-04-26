"use strict";

function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let amount = Number(input[2]);
  let pricePerItem = 0;

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        pricePerItem = 2.5;
        break;
      case "apple":
        pricePerItem = 1.2;
        break;
      case "orange":
        pricePerItem = 0.85;
        break;
      case "grapefruit":
        pricePerItem = 1.45;
        break;
      case "kiwi":
        pricePerItem = 2.7;
        break;
      case "pineapple":
        pricePerItem = 5.5;
        break;
      case "grapes":
        pricePerItem = 3.85;
        break;
    }
  }

  if (day === "Saturday" || day === "Sunday") {
    switch (fruit) {
      case "banana":
        pricePerItem = 2.7;
        break;
      case "apple":
        pricePerItem = 1.25;
        break;
      case "orange":
        pricePerItem = 0.9;
        break;
      case "grapefruit":
        pricePerItem = 1.6;
        break;
      case "kiwi":
        pricePerItem = 3;
        break;
      case "pineapple":
        pricePerItem = 5.6;
        break;
      case "grapes":
        pricePerItem = 4.2;
        break;
    }
  }

  let totalCost = amount * pricePerItem;
  console.log(totalCost.toFixed(2));
}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["apple", "Sunday", "2"]);
