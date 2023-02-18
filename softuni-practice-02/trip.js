function trip(money, season) {
  let budget = money;
  let currentSeason = season;
  let priceForVacation = 0;

  if (budget <= 100) {
    console.log("Somewhere in Bulgaria");
    if (currentSeason === "Summer") {
      priceForVacation = 0.3 * budget;
    } else {
      priceForVacation = 0.7 * budget;
    }
  } else if (budget <= 1000) {
    console.log("Somewhere in Balkans");
    if (currentSeason === "Summer") {
      priceForVacation = 0.4 * budget;
    } else {
      priceForVacation = 0.8 * budget;
    }
  } else {
    console.log("Somewhere in Europe");
    priceForVacation = 0.9 * budget;
  }

  let priceForVacationFormatted = priceForVacation.toFixed(2);

  if (currentSeason === "Summer") {
    console.log("Camp " + " - " + priceForVacationFormatted);
  } else {
    console.log("Hotel" + " - " + priceForVacationFormatted);
  }
}

trip("50", "Summer");
trip("75", "Winter");
trip("312", "Summer");
trip("678.53", "Winter");
trip("1500", "Summer");
