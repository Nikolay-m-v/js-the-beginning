// Румен иска да пребоядиса хола и за целта е наел майстори. Напишете програма, която изчислява разходите за ремонта, предвид следните цени:
// Предпазен найлон - 1.50 лв. за кв. метър
// Боя - 14.50 лв. за литър
// Разредител за боя - 5.00 лв. за литър
// За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.

function painting(params) {
  let protectorPricePerSquareMeter = 1.5;
  let paintPricePerLiter = 14.5;
  let paintDissolverPricePerLiter = 5.0;
  let perForAllBags = 0.4;

  let squareMetersProtector = Number(params[0]);
  let paintLiters = Number(params[1]);
  let paintDissolverLiters = Number(params[2]);
  let hoursWorkersNeedToFinish = Number(params[3]);

  let totalSumForProtector =
    (squareMetersProtector + 2) * protectorPricePerSquareMeter;
  console.log(
    "Total price for the amount of square meters of protector needed is " +
      totalSumForProtector +
      " usd"
  );

  let totalSumForPaint = (paintLiters + paintLiters * 0.1) * paintPricePerLiter;

  console.log(
    "Total price for the amount of liters of paint needed is " +
      totalSumForPaint +
      " usd"
  );

  let totalPaintDissolver = paintDissolverPricePerLiter * paintDissolverLiters;
  console.log(
    "Total price for the amount of liters of paint dissolver needed is " +
      totalPaintDissolver +
      " usd"
  );

  let totalCostMaterials =
    totalSumForProtector +
    totalSumForPaint +
    totalPaintDissolver +
    perForAllBags;
  console.log(
    "Total price for all materials in the amounts needed is " +
      totalCostMaterials +
      " usd"
  );

  let totalCostWorkers = totalCostMaterials * 0.3 * hoursWorkersNeedToFinish;
  console.log(
    "The amount needed to be paid to the workers for 8 hours is " +
      totalCostWorkers +
      " usd"
  );

  let totalCost = totalCostMaterials + totalCostWorkers;
  console.log(
    "The amount of money needed for the materials and workers is " +
      totalCost +
      " usd"
  );
}

painting(["5", "10", "10", "1"]);
