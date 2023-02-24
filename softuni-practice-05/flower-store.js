"use strict";

// Магазин за цветя предлага 3 вида цветя: хризантеми, рози и лалета. Цените зависят от сезона.
// Сезон
// Пролет / Лято
// Есен / Зима
// Хризантеми
// 2.00 лв./бр.
// 3.75 лв./бр.
// Рози
// 4.10 лв./бр.
// 4.50 лв./бр.
// Лалета
// 2.50 лв./бр.
// 4.15 лв./бр.
// В празнични дни цените на всички цветя се увеличават с 15%. Предлагат се следните отстъпки:
// За закупени повече от 7 лалета през пролетта – 5% от цената на целият букет.
// За закупени 10 или повече рози през зимата – 10% от цената на целият букет.
// За закупени повече от 20 цветя общо през всички сезони – 20% от цената на целият букет.
// Отстъпките се правят по така написания ред и могат да се наслагват! Всички отстъпки важат след оскъпяването за празничен ден!
// Цената за аранжиране на букета винаги е 2лв. Напишете програма, която изчислява цената за един букет.

function flowerStore(input) {
  let amountOfChrysanthemums = Number(input[0]);
  let amountOfRoses = Number(input[1]);
  let amountOfTulips = Number(input[2]);
  let currentSeason = String(input[3]);
  let isHolidayYesOrNo = String(input[4]);

  let pricePerChrysanthemum = 0;
  let pricePerRose = 0;
  let pricePerTulip = 0;
  let totalSumForBouquet = 0;
  let priceBouquetArrangement = 2;

  if (currentSeason === "spring" || currentSeason === "summer") {
    pricePerChrysanthemum = 2;
    pricePerRose = 4.1;
    pricePerTulip = 2.5;
  } else {
    pricePerChrysanthemum = 3.75;
    pricePerRose = 4.5;
    pricePerTulip = 4.15;
  }

  totalSumForBouquet =
    amountOfChrysanthemums * pricePerChrysanthemum +
    amountOfRoses * pricePerRose +
    amountOfTulips * pricePerTulip;

  if (amountOfChrysanthemums + amountOfRoses + amountOfTulips >= 20) {
    totalSumForBouquet -= totalSumForBouquet * 0.2;
  }

  if (isHolidayYesOrNo === "Y") {
    totalSumForBouquet += totalSumForBouquet * 0.15;
  }

  if (amountOfTulips >= 7 && currentSeason === "spring") {
    totalSumForBouquet -= totalSumForBouquet * 0.05;
  }

  if (amountOfRoses >= 10 && currentSeason === "winter") {
    totalSumForBouquet -= totalSumForBouquet * 0.1;
  }

  let totalSumForBouquetAfterArrangement =
    totalSumForBouquet + priceBouquetArrangement;

  console.log(totalSumForBouquetAfterArrangement.toFixed(2));
}

flowerStore(["2", "4", "8", "spring", "Y"]);
flowerStore(["3", "10", "9", "winter", "N"]);
