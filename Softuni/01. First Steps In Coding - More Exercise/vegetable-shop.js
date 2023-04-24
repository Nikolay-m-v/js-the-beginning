"use strict";

function vegetableShop(priceKgVeggies, priceKgFruits, kgVeggies, kgFruits) {
  let totalVeggiesCost = priceKgVeggies * kgVeggies;
  let totalFruitsCost = priceKgFruits * kgFruits;
  let total = totalFruitsCost + totalVeggiesCost;
  let inEuro = total / 1.94;
  console.log(inEuro.toFixed(2));
}

vegetableShop(0.194, 19.4, 10, 10);
