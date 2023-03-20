"use strict";

// Напишете софтуер, който да пресмята сметката на клиент, закупил определен брой от дадена напитка от кафемашина
//          Без захар              Нормално           Допълнително захар
// Еспресо   0.90 лв./бр.            1 лв. /бр.             1.20 лв. /бр.
// Капучино   1.00 лв. /бр.          1.20 лв. /бр.         1.60 лв. /бр
// Чай          0.50 лв. /бр.        0.60 лв. /бр.        0.70 лв. /бр
// Трябва да имате предвид следните отстъпки:
// • При избрана напитка без захар има 35% отстъпка.
// • При избрана напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка.
// • При сума надвишава 15 лева, 20% отстъпка от крайната цена,
// Отстъпките се прилагат в реда на тяхното описване

function coffeeMachine(input) {
  let typeOfCoffee = String(input[0]);
  let SugarOrNoSugar = String(input[1]);
  let amount = Number(input[2]);
  let pricePerCoffee = 0;

  if (typeOfCoffee === "Espresso") {
    if (SugarOrNoSugar === "Without") {
      pricePerCoffee = 0.9;
      pricePerCoffee = pricePerCoffee - pricePerCoffee * 0.35;
    } else if (SugarOrNoSugar === "Normal") {
      pricePerCoffee = 1;
    } else {
      pricePerCoffee = 1.2;
    }
    if (amount >= 5) {
      pricePerCoffee = pricePerCoffee - pricePerCoffee * 0.25;
    }
  } else if (typeOfCoffee === "Cappuccino") {
    if (SugarOrNoSugar === "Without") {
      pricePerCoffee = 1;
      pricePerCoffee = pricePerCoffee - pricePerCoffee * 0.35;
    } else if (SugarOrNoSugar === "Normal") {
      pricePerCoffee = 1.2;
    } else {
      pricePerCoffee = 1.6;
    }
  } else {
    if (SugarOrNoSugar === "Without") {
      pricePerCoffee = 0.5;
      pricePerCoffee = pricePerCoffee - pricePerCoffee * 0.35;
    } else if (SugarOrNoSugar === "Normal") {
      pricePerCoffee = 0.6;
    } else {
      pricePerCoffee = 0.7;
    }
  }
  let totalCost = amount * pricePerCoffee;
  if (totalCost > 15) {
    totalCost = totalCost - totalCost * 0.2;
  }

  console.log(
    "You bought " +
      amount +
      " of " +
      typeOfCoffee +
      " for " +
      totalCost.toFixed(2) +
      " lv."
  );
}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);
