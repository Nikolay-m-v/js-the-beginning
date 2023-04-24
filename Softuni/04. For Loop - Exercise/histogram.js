"use strict";

// Дадени са n цели числа в интервала [1…1000].
// От тях някакъв процент percentageRangeOn са под 200, друг процент numbersInRangeTwo са от 200 до 399, друг процент numbersInRangeThree са от 400 до 599,
// друг процент numbersInRangeFour са от 600 до 799 и останалите numbersInRangeFive процента са от 800 нагоре.
// Да се напише програма, която изчислява и отпечатва процентите percentageRangeOn, numbersInRangeTwo, numbersInRangeThree, numbersInRangeFour и numbersInRangeFive.
// Пример: имаме n = 20 числа: 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65.

function examTaskOne(input) {
  let amountOfNumbers = Number(input[0]);

  let numbersInRangeOne = 0;
  let numbersInRangeTwo = 0;
  let numbersInRangeThree = 0;
  let numbersInRangeFour = 0;
  let numbersInRangeFive = 0;

  for (let i = 1; i <= amountOfNumbers; i++) {
    let currentNumber = input[i];

    if (currentNumber < 200) {
      numbersInRangeOne++;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      numbersInRangeTwo += 1;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      numbersInRangeThree += 1;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      numbersInRangeFour += 1;
    } else if (currentNumber >= 800 && currentNumber < 1000) {
      numbersInRangeFive += 1;
    }
  }

  let percentageRangeOne = (numbersInRangeOne / amountOfNumbers) * 100;
  let percentageRangeTwo = (numbersInRangeTwo / amountOfNumbers) * 100;
  let percentageRangeThree = (numbersInRangeThree / amountOfNumbers) * 100;
  let percentageRangeFour = (numbersInRangeFour / amountOfNumbers) * 100;
  let percentageInRangeFive = (numbersInRangeFive / amountOfNumbers) * 100;

  console.log(percentageRangeOne.toFixed(2) + "%");
  console.log(percentageRangeTwo.toFixed(2) + "%");
  console.log(percentageRangeThree.toFixed(2) + "%");
  console.log(percentageRangeFour.toFixed(2) + "%");
  console.log(percentageInRangeFive.toFixed(2) + "%");
}

// examTaskOne(["3", "1", "2", "999"]);
// examTaskOne(["7", "800", "801", "250", "199", "399", "599", "799"]);
// examTaskOne(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
examTaskOne([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);
