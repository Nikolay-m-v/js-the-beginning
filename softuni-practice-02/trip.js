"use strict";

//Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с определен бюджет и свободно време в даден сезон.
// Напишете функция, която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
// Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел.
// Ако е в Европа, независимо от сезона ще почива в хотел.
// Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета:
//При 100лв. или по-малко – някъде в България
// Лято – 30% от бюджета
// Зима – 70% от бюджета
// При 1000лв. или по малко – някъде на Балканите
// Лято – 40% от бюджета
// Зима – 80% от бюджета
// При повече от 1000лв. – някъде из Европа
// При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.

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
