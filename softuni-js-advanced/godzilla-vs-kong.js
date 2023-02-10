//Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, дали предвидените средства са достатъчни за снимането на филма. За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
//Известно е, че:
//Декорът за филма е на стойност 10% от бюджета.
//При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

function movieBudget(params) {
  let totalBudget = Number(params[0]);
  let amountOfExtraPeople = Number(params[1]);
  let pricePerEquipmentForEachExtra = Number(params[2]);
  let sumForDecoration = totalBudget * 0.1;

  let totalPriceForEquipmentForEachExtra =
    amountOfExtraPeople * pricePerEquipmentForEachExtra;

  if (amountOfExtraPeople > 150) {
    totalPriceForEquipmentForEachExtra -=
      totalPriceForEquipmentForEachExtra * 0.1;
  }

  let totalSumForMovie = totalPriceForEquipmentForEachExtra + sumForDecoration;
  let moneyLeft = totalBudget - totalSumForMovie;

  if (totalSumForMovie < totalBudget) {
    console.log(
      "Action! Wingard starts filming with " +
        Math.abs(moneyLeft) +
        " leva left."
    );
  }
  if (totalSumForMovie > totalBudget) {
    console.log(
      "Not enough money! Wingard needs " + Math.abs(moneyLeft) + " leva more."
    );
  }
}
// movieBudget(["20000", "120", "55.5"]);
// movieBudget(["15437.62", "186", "57.99"]);
movieBudget(["9587.88", "222", "55.68"]);
