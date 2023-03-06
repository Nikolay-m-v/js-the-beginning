"use strict";

// Напишете програма, която спрямо даден бюджет и сезон да пресмята цената, типа и класа на кола под наем.
// Сезоните са лято и зима – "Summer" и "Winter". Типа коли са кабрио и джип – "Cabrio" и "Jeep".
// При бюджет по-малък или равен от 100лв.:
// Класът ще е - "Economy class"
// Според сезона колата и цената ще са:
// Лято – Кабрио – 35% от бюджета
// Зима – Джип – 65% от бюджета
// При бюджет по-голям от 100лв. и по-малък или равен от 500лв.:
// Класът ще е - "Compact class"
// Според сезона колата и цената ще са:
// Лято – Кабрио – 45% от бюджета
// Зима – Джип – 80% от бюджета
// При бюджет по-голям от 500лв.:
// Класът ще е – "Luxury class"
// За всеки сезон колата ще е джип и цената ще е:
// 90% от бюджета

function carRent(input) {
  let budget = Number(input[0]);
  let season = String(input[1]);
  let classType;
  let car;
  let carRentPrice = 0;

  if (budget <= 100) {
    classType = "Economy class";
    if (season === "Summer") {
      car = "Cabrio";
      carRentPrice = budget * 0.35;
    } else if (season === "Winter") {
      car = "Jeep";
      carRentPrice = budget * 0.65;
    }
  } else if (budget > 100 && budget <= 500) {
    classType = "Compact class";
    if (season === "Summer") {
      car = "Cabrio";
      carRentPrice = budget * 0.45;
    } else if (season === "Winter") {
      car = "Jeep";
      carRentPrice = budget * 0.8;
    }
  } else {
    classType = "Luxury class";
    car = "Jeep";
    carRentPrice = budget * 0.9;
  }

  console.log(classType);
  console.log(car + " - " + carRentPrice.toFixed(2));
}

carRent(["450", "Summer"]);
carRent(["450", "Winter"]);
carRent(["99.99", "Summer"]);
carRent(["70.50", "Winter"]);
carRent(["1010", "Summer"]);
