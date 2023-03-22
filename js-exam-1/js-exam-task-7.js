"use strict";

// Туристическа агенция има нужда от система за изчисляване на дължимата сума при резервация. В
// зависимост от различните дестинации и различните пакети, цената е различна.
// Цените за ден са следните:
//        Банско/Боровец                  Варна/Бургас
//  с екипировка     без екипировка      със закуска    без закуска
//  Цена за ден 100лв.    80лв              130лв.     100лв
// VIP отстъпка 10%          5%              12%        7%

function travelAgency(input) {
  let location = String(input[0]);
  let typeOfStayingIn = String(input[1]);
  let isVip = String(input[2]);
  let days = Number(input[3]);
  let pricePerNight = 0;
  let vipReduction = 0;

  if (isVip === "yes") {
    if (location === "Borovets" || location === "Bansko") {
      if (typeOfStayingIn === "withEquipment") {
        vipReduction = 0.1;
        pricePerNight = 100;
        pricePerNight -= pricePerNight * vipReduction;
      } else {
        vipReduction = 0.05;
        pricePerNight = 80;
        pricePerNight -= pricePerNight * vipReduction;
      }
    } else {
      if (typeOfStayingIn === "withBreakfast") {
        vipReduction = 0.12;
        pricePerNight = 130;
        pricePerNight -= pricePerNight * vipReduction;
      } else {
        vipReduction = 0.07;
        pricePerNight = 100;
        pricePerNight -= pricePerNight * vipReduction;
      }
    }
  } else {
    if (location === "Borovets" || location === "Bansko") {
      if (typeOfStayingIn === "withEquipment") {
        pricePerNight = 100;
      } else {
        pricePerNight = 80;
      }
    } else {
      if (typeOfStayingIn === "withBreakfast") {
        pricePerNight = 130;
      } else {
        pricePerNight = 100;
      }
    }
  }

  let totalCostForStay = pricePerNight * days;
  console.log(
    "The price is " + totalCostForStay.toFixed(2) + "lv! Have a nice time!"
  );
}

travelAgency(["Borovets", "noEquipment", "yes", "6"]);
travelAgency(["Bansko", "withEquipment", "no", "2"]);
travelAgency(["Varna", "withBreakfast", "yes", "5"]);
travelAgency(["Burgas", "noBreakfast", "no", "4"]);
