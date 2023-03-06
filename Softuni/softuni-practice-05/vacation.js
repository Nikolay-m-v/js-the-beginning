"use strict";

// Напишете програма, която спрямо даден бюджет и сезон да пресмята цената, локацията и мястото на настаняване за ваканция.
// Сезоните са лято и зима – "Summer" и "Winter". Локациите са – "Alaska" и "Morocco".
// Възможните места за настаняване – "Hotel", "Hut" или "Camp".
// При бюджет по-малък или равен от 1000лв.:
// Настаняване в "Camp"
// Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
// Лято – Аляска – 65% от бюджета
// Зима – Мароко – 45% от бюджета
// При бюджет по-голям от 1000лв. и по-малък или равен от 3000лв.:
// Настаняване в "Hut"
// Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
// Лято – Аляска – 80% от бюджета
// Зима – Мароко – 60% от бюджета
// При бюджет по-голям от 3000лв.:
// Настаняване в "Hotel"
// Според сезона локацията ще е една от следните и ще струва 90% от бюджета:
// Лято – Аляска
// Зима – Мароко

function vacation(input) {
  let budget = Number(input[0]);
  let season = String(input[1]);
  let stayingInResidenceType;
  let location;
  let vacationPrice = 0;

  if (budget < 1000) {
    stayingInResidenceType = "Camp";
    if (season === "Summer") {
      location = "Alaska";
      vacationPrice = budget * 0.65;
    } else if (season === "Winter") {
      location = "Morocco";
      vacationPrice = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    stayingInResidenceType = "Hut";
    if (season === "Summer") {
      location = "Alaska";
      vacationPrice = budget * 0.8;
    } else if (season === "Winter") {
      location = "Morocco";
      vacationPrice = budget * 0.6;
    }
  } else if (budget > 3000) {
    stayingInResidenceType = "Hotel";
    vacationPrice = budget * 0.9;
    if (season === "Summer") {
      location = "Alaska";
    } else if (season === "Winter") {
      location = "Morocco";
    }
  }
  console.log(
    location + " - " + stayingInResidenceType + " - " + vacationPrice.toFixed(2)
  );
}

vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["5000", "Winter"]);
