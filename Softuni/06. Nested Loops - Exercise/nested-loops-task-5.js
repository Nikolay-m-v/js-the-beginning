"use strict";

// Да се напише програма, която чете едно цяло число N, въведено от потребителя,
// и генерира всички възможни "специални" числа от 1111 до 9999. За да бъде "специално" едно число, то трябва да отговаря на следното условие:
// N да се дели на всяка една от неговите цифри без остатък.
// Пример: при N = 16, 2418 е специално число:
// 16 / 2 = 8 без остатък
// 16 / 4 = 4 без остатък
// 16 / 1 = 16 без остатък
// 16 / 8 = 2 без остатък

function specialNumbers(input) {
  let number = Number(input[0]);
  let specialNum = " ";

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          if (
            number % i === 0 &&
            number % j === 0 &&
            number % k === 0 &&
            number % l === 0
          ) {
            specialNum += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }
  console.log(specialNum);
}

specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);
