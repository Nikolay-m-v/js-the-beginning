"use strict";

// Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да
// напишете програма, която да изчисли, дали предвидените средства са достатъчни за снимането на филма.
// За снимките ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
// Известно е, че:
// • Декорът за филма е на стойност 10% от бюджета.
// • При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.

function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let amountOfStatists = Number(input[1]);
  let pricePerEquipment = Number(input[2]);
  let decoration = budget * 0.1;

  if (amountOfStatists > 150) {
    pricePerEquipment = pricePerEquipment - pricePerEquipment * 0.1;
  }

  let totalCostForStatists = amountOfStatists * pricePerEquipment;

  let totalCost = decoration + totalCostForStatists;
  let moneyLeftOrNeeded = budget - totalCost;

  if (budget >= totalCost) {
    console.log("Action!");
    console.log(
      "Wingard starts filming with " +
        moneyLeftOrNeeded.toFixed(2) +
        " leva left."
    );
  } else {
    let moneyLeftOrNeededFormatted = Math.abs(moneyLeftOrNeeded);
    console.log("Not enough money!");
    console.log(
      "Wingard needs " + moneyLeftOrNeededFormatted.toFixed(2) + " leva more."
    );
  }
}

godzillaVsKong([20000, 120, 55.5]);
godzillaVsKong([15437.62, 186, 57.99]);
godzillaVsKong([9587.88, 222, 55.68]);
