"use strict";

// В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
// Premiere – премиерна прожекция, на цена 12.00 лева.
// Normal – стандартна прожекция, на цена 7.50 лева.
// Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
// Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала.
// Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.

function cinema(params) {
  let income = 0;
  let typeOfTicket = String(params[0]);
  let pricePerTicket = 0;
  let rows = Number(params[1]);
  let colons = Number(params[2]);

  if (typeOfTicket === "Premiere") {
    pricePerTicket = 12.0;
  } else if (type === "Normal") {
    pricePerTicket = 7.5;
  } else {
    pricePerTicket = 5.0;
  }

  income = rows * colons * pricePerTicket;

  let incomeFormatted = income.toFixed(2);

  console.log(incomeFormatted + " leva");
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
