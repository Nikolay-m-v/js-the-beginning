"use strict";

// Хотел предлага 2 вида стаи: студио и апартамент.
// Напишете функция, която изчислява цената за целия престой за студио и апартамент. Цените зависят от месеца на престоя:
// Май и октомври
// Студио – 50 лв./нощувка
// Апартамент – 65 лв./нощувка
// Юни и септември
// Студио – 75.20 лв./нощувка
// Апартамент – 68.70 лв./нощувка
// Юли и август
// Студио – 76 лв./нощувка
// Апартамент – 77 лв./нощувка
// Предлагат се и следните отстъпки:
// За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.

function hotelRoom(params) {
  let currentMonth = String(params[0]);
  let nightsToStay = Number(params[1]);
  let pricePerNightForStudio = 0;
  let pricePerNightForApartment = 0;
  let totalSumForStudio = 0;
  let totalSumForApartment = 0;

  if (currentMonth === "May" || currentMonth === "October") {
    pricePerNightForStudio = 50;
    pricePerNightForApartment = 65;
    if (nightsToStay > 7 && nightsToStay < 14) {
      pricePerNightForStudio -= pricePerNightForStudio * 0.05;
    } else if (nightsToStay > 14) {
      pricePerNightForStudio -= pricePerNightForStudio * 0.3;
    }
  } else if (currentMonth === "June" || currentMonth === "September") {
    pricePerNightForStudio = 75.2;
    pricePerNightForApartment = 68.7;
    if (nightsToStay > 14) {
      pricePerNightForStudio -= pricePerNightForStudio * 0.2;
    }
  } else {
    pricePerNightForStudio = 76;
    pricePerNightForApartment = 77;
  }
  if (nightsToStay > 14) {
    pricePerNightForApartment -= pricePerNightForApartment * 0.1;
  }

  totalSumForApartment = pricePerNightForApartment * nightsToStay;
  totalSumForStudio = pricePerNightForStudio * nightsToStay;
  let totalSumForApartmentFormatted = totalSumForApartment.toFixed(2);
  let totalSumForStudioFormatted = totalSumForStudio.toFixed(2);
  console.log(totalSumForApartmentFormatted + " lv.");
  console.log(totalSumForStudioFormatted + " lv.");
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
