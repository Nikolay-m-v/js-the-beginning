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
