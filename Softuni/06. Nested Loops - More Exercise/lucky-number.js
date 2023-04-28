"use strict";

function luckyNumber(number) {
  let index = 0;
  let n = number;
  let string = "";

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          if (i + j === k + l) {
            let luckyNumber = i + j;
            if (n % luckyNumber === 0) {
              string += `${i}${j}${k}${l} `;
            }
          }
        }
      }
    }
  }
  console.log(string);
}

luckyNumber(3);
