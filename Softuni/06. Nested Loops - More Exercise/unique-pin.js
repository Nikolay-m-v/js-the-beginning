"use strict";

function uniquePin(input) {
  let firstNum = input[0];
  let secondNum = input[1];
  let thirdNum = input[2];

  for (let i = 2; i <= firstNum; i += 2) {
    for (let j = 1; j <= secondNum; j++) {
      if (j === 2 || j === 3 || j === 5 || j === 7) {
        for (let k = 2; k <= thirdNum; k += 2) {
          console.log(`${i} ${k} ${j} `);
        }
      }
    }
  }
}

uniquePin([3, 5, 5]);
