"use strict";

// Напишете програма която пресмята колко пари ще изкара шофьор на ТИР за един сезон.
// На входа програмата получава през кой сезон ще работи шофьора, както и колко километра на месец ще кара.
// Един сезон е 4 месеца. Според зависи сезона и броя километри на месец ще му се заплаща различна сума на километър:
// км на месец <= 5000
// Пролет/Есен
// 0.75 лв./км
// 0.95 лв./км
// Лято
// 0.90 лв./км
// 1.10 лв./км
// Зима
// 1.05 лв./км
// 1.25 лв./км
// 5000 < км на месец <= 10000
// 10000 < км на месец <= 20000 1.45 лв./км – за който и да е сезон

function truckDriver(input) {
  let season = String(input[0]);
  let kilometersPerMonth = Number(input[1]);
  let tax = 0.1;
  let salary = 0;
  let paidPerKm = 0;
  let monthsPerSeason = 4;

  if (kilometersPerMonth <= 5000) {
    if (season === "Spring" || season === "Autumn") {
      paidPerKm = 0.75;
    } else if (season === "Summer") {
      paidPerKm = 0.9;
    } else {
      paidPerKm = 1.05;
    }
  } else if (kilometersPerMonth > 5000 && kilometersPerMonth <= 10000) {
    if (season === "Spring" || season === "Autumn") {
      paidPerKm = 0.95;
    } else if (season === "Summer") {
      paidPerKm = 1.1;
    } else {
      paidPerKm = 1.25;
    }
  } else {
    paidPerKm = 1.45;
  }

  salary = kilometersPerMonth * paidPerKm;
  let salaryForWholeSeason = salary * monthsPerSeason;
  let totalSalaryAfterTax = salaryForWholeSeason - salaryForWholeSeason * tax;

  console.log(totalSalaryAfterTax.toFixed(2));
}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
