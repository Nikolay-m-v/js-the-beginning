"use strict";

// Дадени са n цели числа в интервала [1…1000].
// От тях някакъв процент percentageRangeOn са под 200, друг процент percentageRangeTwo са от 200 до 399, друг процент percentageRangeThree са от 400 до 599,
// друг процент percentageRangeFour са от 600 до 799 и останалите percentageRangeFive процента са от 800 нагоре.
// Да се напише програма, която изчислява и отпечатва процентите percentageRangeOn, percentageRangeTwo, percentageRangeThree, percentageRangeFour и percentageRangeFive.
// Пример: имаме n = 20 числа: 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65.

function examTaskOne(input) {
  let amountOfNumbers = Number(input[0]);
  let numberOne = Number(input[1]);
  let numberTwo = Number(input[2]);
  let numberThree = Number(input[3]);

  let percentageRangeOne = 0;
  let percentageRangeTwo = 0;
  let percentageRangeThree = 0;
  let percentageRangeFour = 0;
  let percentageRangeFive = 0;

  for (let i = 1; i <= amountOfNumbers; i++) {
    let currentNumber = input[i];

    if (currentNumber < 200) {
      percentageRangeOne += 1;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      percentageRangeTwo += 1;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      percentageRangeThree += 1;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      percentageRangeFour += 1;
    } else if (currentNumber >= 800 && currentNumber < 1000) {
      percentageRangeFive += 1;
    }
  }

  percentageRangeOne = (percentageRangeOne / amountOfNumbers) * 100;
  let percentageRangeOneFormatted = percentageRangeOne.toFixed(2);
  percentageRangeTwo = (percentageRangeTwo / amountOfNumbers) * 100;
  let percentageRangeTwoFormatted = percentageRangeTwo.toFixed(2);
  percentageRangeThree = (percentageRangeThree / amountOfNumbers) * 100;
  let percentageRangeThreeFormatted = percentageRangeThree.toFixed(2);
  percentageRangeFour = (percentageRangeFour / amountOfNumbers) * 100;
  let percentageRangeFourFormatted = percentageRangeFour.toFixed(2);
  percentageRangeFive = (percentageRangeFive / amountOfNumbers) * 100;
  let percentageRangeFiveFormatted = percentageRangeFive.toFixed(2);
  console.log(percentageRangeOneFormatted);
  console.log(percentageRangeTwoFormatted);
  console.log(percentageRangeThreeFormatted);
  console.log(percentageRangeFourFormatted);
  console.log(percentageRangeFiveFormatted);
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
