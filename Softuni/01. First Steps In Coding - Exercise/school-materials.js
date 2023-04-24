// Учебната година вече е започнала и отговорничката на 10Б клас - Ани трябва да купи определен брой пакетчета с химикали, пакетчета с маркери, както и препарат за почистване на дъска. Тя е редовна клиентка на една книжарница, затова има намаление за нея, което представлява някакъв процент от общата сума. Напишете програма, която изчислява колко пари ще трябва да събере Ани, за да плати сметката, като имате предвид следния ценоразпис:
// Пакет химикали - 5.80 лв.
// Пакет маркери - 7.20 лв.
// Препарат - 1.20 лв (за литър)

function calcMaterials(params) {
  let pricePerPenPackage = 5.8;
  let marker = 7.2;
  let cleaner = 1.2;

  let penPacks = Number(params[0]);
  let markerPacks = Number(params[1]);
  let cleanerLiters = Number(params[2]);
  let percentageOff = Number(params[3]);

  let moneyNeededForMaterials =
    pricePerPenPackage * penPacks +
    marker * markerPacks +
    cleaner * cleanerLiters;

  let moneyAfterReduction =
    moneyNeededForMaterials - moneyNeededForMaterials * (percentageOff / 100);

  console.log(
    "The amount of money needed to buy the materials is " +
      moneyNeededForMaterials
  );

  console.log(
    "The total amount of money you will need after the price reduction after using your coupon is " +
      moneyAfterReduction
  );
}

calcMaterials(["2", "3", "4", "25"]);
