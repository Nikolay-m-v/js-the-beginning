"use strict";

//Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.
// Цената зависи от сезона:
// Цената за наем на кораба през пролетта е  3000 лв.
// Цената за наем на кораба през лятото и есента е  4200 лв.
// Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// Ако групата е до 6 човека включително  –  отстъпка от 10%.
// Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// Ако групата е от 12 нагоре  –  отстъпка от 25%.
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка.

function boatForFishing(money, season, amountOfFishermans) {
  let budget = money;
  let currentSeason = season;
  let fishermans = amountOfFishermans;
  let priceToRent = 0;

  if (currentSeason === "Spring") {
    priceToRent = 3000;
  } else if (currentSeason === "Summer" || currentSeason === "Autumn") {
    priceToRent = 4200;
  } else {
    priceToRent = 2600;
  }

  if (fishermans <= 6) {
    priceToRent -= priceToRent * 0.1;
  } else if (fishermans > 6 && fishermans <= 11) {
    priceToRent -= priceToRent * 0.15;
  } else {
    priceToRent -= priceToRent * 0.25;
  }

  if (fishermans % 2 == 0) {
    if (
      currentSeason === "Spring" ||
      currentSeason === "Summer" ||
      currentSeason === "Winter"
    ) {
      priceToRent -= priceToRent * 0.05;
    }
  }

  let moneyLeft = budget - priceToRent;
  let moneyLeftFormatted = Math.abs(moneyLeft).toFixed(2);

  if (budget >= priceToRent) {
    console.log("Yes! You have " + moneyLeftFormatted + " leva left.");
  } else {
    console.log("Not enough money! You need " + moneyLeftFormatted + " leva.");
  }
}

boatForFishing("3000", "Summer", "11");
boatForFishing("3600", "Autumn", "6");
boatForFishing("2000", "Winter", "13");
