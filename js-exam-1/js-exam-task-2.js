"use strict";

// Преподавателският екип на СофтУни организира работен ден на басейн по случай настъпването на лятото.
// Вашата задача е да напишете програма, която да изчислява каква сума трябва да се заплати. За всеки един
// човек от екипа трябва да се заплати такса вход. Трябва да имате предвид, че един чадър стига за двама
// души. Знае се, че само 75% от екипа искат шезлонги. При изчислението на броя на чадърите и шезлонгите,
// техният брой да се закръгли до по-голямото цяло число.

function poolDay(input) {
  let amountOfPeople = Number(input[0]);
  let buyIn = Number(input[1]);
  let pricePerDeckchair = Number(input[2]);
  let pricePerUmbrella = Number(input[3]);

  let umbrellasNeeded = amountOfPeople / 2;
  let totalCostForUmbrellas = Math.ceil(umbrellasNeeded) * pricePerUmbrella;
  let deckchairsNeeded = amountOfPeople * 0.75;
  let totalCostForDeckchairs = Math.ceil(deckchairsNeeded) * pricePerDeckchair;

  let totalCost =
    totalCostForDeckchairs + totalCostForUmbrellas + buyIn * amountOfPeople;

  console.log(totalCost.toFixed(2) + " lv.");
}

poolDay([21, 5.5, 4.4, 6.2]);
poolDay([50, 6, 8, 4]);
