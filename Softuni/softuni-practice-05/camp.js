"use strict";

// Частно училище организира лагери за учениците по време на ваканциите.
// В зависимост от вида на ваканцията (пролетна, лятна или зимна) и вида на групата
// (момчета/момичета или смесена) цената на нощувката в хотела е различна, както и спортът, който ще практикуват учениците.
// момчета/момичета
// смесена група
// Зимна ваканция
// 9.60
// 10
// Пролетна ваканция
// 7.20
// 9.50
// Лятна ваканция
// 15
// 20
// Училището получава отстъпка от крайната цена, в зависимост от броя на настанените в хотела ученици:
// Ако броят на учениците е 50 или повече, училището получава 50% отстъпка
// Ако броят на учениците е 20 или повече и в същото време по-малък от 50, училището получава 15% отстъпка
// Ако броят на учениците е 10 или повече и в същото време по-малък от 20, училището получава 5% отстъпка
// В таблицата по-долу са дадени спортовете, които ще се практикуват в зависимост от вида на ваканцията и групата:
// Зимна ваканция
// Пролетна ваканция
// Лятна ваканция
// момичета
// Gymnastics
// Athletics
// Volleyball
// момчета
// Judo
// Tennis
// Football
// смесена група
// Ski
// Cycling
// Swimming

function studentCamp(input) {
  let season = String(input[0]);
  let typeOfGroup = String(input[1]);
  let amountOfStudents = Number(input[2]);
  let nightsStayingIn = Number(input[3]);
  let pricePerNight = 0;
  let percentageOff = 0;
  let sport;

  if (season === "Winter") {
    if (typeOfGroup === "girls" || typeOfGroup === "boys") {
      pricePerNight = 9.6;
    } else {
      pricePerNight = 10;
    }
  } else if (season === "Spring") {
    if (typeOfGroup === "girls" || typeOfGroup === "boys") {
      pricePerNight = 7.2;
    } else {
      pricePerNight = 9.5;
    }
  } else if (season === "Summer") {
    if (typeOfGroup === "girls" || typeOfGroup === "boys") {
      pricePerNight = 15;
    } else {
      pricePerNight = 20;
    }
  }

  if (amountOfStudents >= 50) {
    percentageOff = 0.5;
  } else if (amountOfStudents >= 20 && amountOfStudents < 50) {
    percentageOff = 0.15;
  } else if (amountOfStudents >= 10 && amountOfStudents < 20) {
    percentageOff = 0.05;
  }

  if (typeOfGroup === "girls") {
    if (season === "Winter") {
      sport = "Gymnastics";
    } else if (season === "Spring") {
      sport = "Athletics";
    } else if (season === "Summer") {
      sport = "Volleyball";
    }
  } else if (typeOfGroup === "boys") {
    if (season === "Winter") {
      sport = "Judo";
    } else if (season === "Spring") {
      sport = "Tennis";
    } else if (season === "Summer") {
      sport = "Football";
    }
  } else if (typeOfGroup === "mixed") {
    if (season === "Winter") {
      sport = "Ski";
    } else if (season === "Spring") {
      sport = "Cycling";
    } else if (season === "Summer") {
      sport = "FootSwimmingball";
    }
  }

  let totalPaid = nightsStayingIn * pricePerNight * amountOfStudents;
  let totalPaidAfterPercentageOff = totalPaid - totalPaid * percentageOff;

  console.log(sport + " " + totalPaidAfterPercentageOff.toFixed(2) + " lv");
}

studentCamp(["Spring", "girls", "20", "7"]);
studentCamp(["Winter", "mixed", "9", "15"]);
studentCamp(["Summer", "boys", "60", "7"]);
studentCamp(["Spring", "mixed", "17", "14"]);
