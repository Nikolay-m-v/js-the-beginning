"use strict";

function shop(input) {
  let product = input[0];
  let city = input[1];
  let amount = Number(input[2]);
  let pricePerItem = 0;

  if (city === "Sofia") {
    if (product === "coffee") {
      pricePerItem = 0.5;
    } else if (product === "water") {
      pricePerItem = 0.8;
    } else if (product === "beer") {
      pricePerItem = 1.2;
    } else if (product === "sweets") {
      pricePerItem = 1.45;
    } else if (product === "peanuts") {
      pricePerItem = 1.6;
    }
  } else if (city === "Plovdiv") {
    if (product === "coffee") {
      pricePerItem = 0.4;
    } else if (product === "water") {
      pricePerItem = 0.7;
    } else if (product === "beer") {
      pricePerItem = 1.15;
    } else if (product === "sweets") {
      pricePerItem = 1.3;
    } else if (product === "peanuts") {
      pricePerItem = 1.5;
    }
  } else if (city === "Varna") {
    if (product === "coffee") {
      pricePerItem = 0.45;
    } else if (product === "water") {
      pricePerItem = 0.7;
    } else if (product === "beer") {
      pricePerItem = 1.1;
    } else if (product === "sweets") {
      pricePerItem = 1.35;
    } else if (product === "peanuts") {
      pricePerItem = 1.55;
    }
  }
  let totalCost = amount * pricePerItem;
  console.log(totalCost);
}

shop(["coffee", "Varna", "2"]);
