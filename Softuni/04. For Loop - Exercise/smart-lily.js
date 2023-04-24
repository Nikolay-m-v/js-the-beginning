"use strict";

// Лили вече е на N години. За всеки свой рожден ден тя получава подарък.
// За нечетните рождени дни (1, 3, 5...n) получава играчки.
// За четните рождени дни (2, 4, 6...n) получава пари.
// За втория рожден ден получава 10.00 лв, като сумата се увеличава с 10.00 лв.,
// за всеки следващ четен рожден ден (2 -> 10, 4 -> 20, 6 -> 30...и т.н.).
// През годините Лили тайно е спестявала парите. Братът на Лили, в годините, които тя получава пари, взима по 1.00 лев от тях.
// Лили продала играчките получени през годините, всяка за P лева и добавила сумата към спестените пари.
// С парите искала да си купи пералня за X лева. Напишете програма, която да пресмята, колко пари е събрала и дали ѝ стигат да си купи пералня.

function smartLily(input) {
  let age = Number(input[0]);
  let priceOfWashingMachine = Number(input[1]);
  let pricePerToy = Number(input[2]);
  let oddNumbers = 0;
  let evenNumbers = 0;
  let moneyGatheredFromBirthdays = 0;
  let moneyReceivedAsGiftForBirthday = 0;
  let totalAmountOfToysReceivedForBirthdays = 0;
  let brotherTakingMoney = 1;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      evenNumbers++;
    } else {
      oddNumbers++;
    }
  }

  for (let i = 1; i <= evenNumbers; i++) {
    moneyReceivedAsGiftForBirthday += 10;
    moneyGatheredFromBirthdays += moneyReceivedAsGiftForBirthday;
  }

  for (let i = 1; i <= oddNumbers; i++) {
    let toysReceivedPerOddBirthday = +1;
    totalAmountOfToysReceivedForBirthdays += toysReceivedPerOddBirthday;
  }

  let moneyFromToysSold = totalAmountOfToysReceivedForBirthdays * pricePerToy;
  let totalMoneyMade =
    moneyFromToysSold +
    moneyGatheredFromBirthdays -
    brotherTakingMoney * evenNumbers;
  let moneyLeftOrNeeded = totalMoneyMade - priceOfWashingMachine;

  if (totalMoneyMade >= priceOfWashingMachine) {
    console.log("Yes! " + moneyLeftOrNeeded.toFixed(2));
  } else {
    console.log("No! " + Math.abs(moneyLeftOrNeeded.toFixed(2)));
  }
}

smartLily(["10", "170", "6"]);
smartLily(["21", "1570.98", "3"]);
