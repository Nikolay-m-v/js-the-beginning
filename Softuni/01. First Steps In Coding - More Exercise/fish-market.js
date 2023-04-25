"use strict";

function fishMarket(
  mackerelKgPrice,
  sprinkleKgPrice,
  bonitoKg,
  safridKg,
  musselsKg
) {
  let bonitoPricePerKg = mackerelKgPrice * 1.6;
  let safridPricePerKg = sprinkleKgPrice * 1.8;
  let musselsPricePerKg = 7.5;
  let bonitoCost = bonitoKg * bonitoPricePerKg;
  let safirdCost = safridKg * safridPricePerKg;
  let musselsCost = musselsKg * musselsPricePerKg;
  let totalCost = bonitoCost + safirdCost + musselsCost;
  console.log(totalCost.toFixed(2));
}

fishMarket(6.9, 4.2, 1.5, 2.5, 1);
