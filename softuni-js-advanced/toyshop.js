//Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия.
//Цени на играчките:
//Пъзел - 2.60 лв.
//Говореща кукла - 3 лв.
//Плюшено мече - 4.10 лв.
//Миньон - 8.20 лв.
//Камионче - 2 лв.
//Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.

function toyShop(params) {
  let eachPuzzle = 2.6;
  let eachTalkingDoll = 3;
  let eachTeddyBear = 4.1;
  let eachMinion = 8.2;
  let eachTruck = 2;

  let priceOfVacation = Number(params[0]);
  let amountOfPuzzles = Number(params[1]);
  let amountOfTalkingDolls = Number(params[2]);
  let amountOfTeddyBears = Number(params[3]);
  let amountOfMinions = Number(params[4]);
  let amountOfTrucks = Number(params[5]);

  let totalToysOrdered =
    amountOfPuzzles +
    amountOfTalkingDolls +
    amountOfTeddyBears +
    amountOfMinions +
    amountOfTrucks;
  let totalSum =
    eachPuzzle * amountOfPuzzles +
    eachTalkingDoll * amountOfTalkingDolls +
    eachTeddyBear * amountOfTeddyBears +
    eachMinion * amountOfMinions +
    eachTruck * amountOfTrucks;
  console.log(totalSum);
  console.log(totalToysOrdered);

  if (totalToysOrdered > 50) {
    totalSum = totalSum - totalSum * 0.25;
  }

  let rent = totalSum * 0.1;
  console.log(rent);
  let totalSumAfterRent = totalSum - rent;
  let totalSumAfterRentAndVacation = totalSumAfterRent - priceOfVacation;

  console.log(totalSum);
  console.log(totalSumAfterRent);

  if (totalSumAfterRent > priceOfVacation) {
    console.log("Yes! " + totalSumAfterRentAndVacation + " lv left.");
  }

  if (totalSumAfterRent < priceOfVacation) {
    console.log(
      "Not enough money! " + totalSumAfterRentAndVacation + " lv needed."
    );
  }
}

// toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
