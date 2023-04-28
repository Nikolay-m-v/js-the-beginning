"use strict";

function oddEvenPositions(input) {
  let evenSum = 0;
  let oddSum = 0;
  let index = 0;
  let oddMin = 0;
  let oddMax = 0;
  let evenMin = 0;
  let evenMax = 0;
  let n = input[index++];

  for (let i = 0; i < n; i++) {
    let currentNum = input[index++];

    if (currentNum % 2 === 0) {
      evenSum += currentNum;
      if (currentNum > evenMax) {
        evenMax = currentNum;
        evenMin = currentNum;
      } else {
        evenMin = currentNum;
      }
    } else {
      oddSum += currentNum;
      if (currentNum > oddMax) {
        oddMax = currentNum;
        oddMin = currentNum;
      } else {
        oddMin = currentNum;
      }
    }
  }

  if (oddMax > 0) {
    console.log(`OddMax = ${oddMax.toFixed(2)}`);
  } else {
    console.log(`OddMax = No`);
  }
  if (oddMin > 0) {
    console.log(`OddMin = ${oddMin.toFixed(2)}`);
  } else {
    console.log(`OddMin = No`);
  }

  if (oddSum > 0) {
    console.log(`Oddsum = ${oddSum.toFixed(2)}`);
  } else {
    console.log(`OddSum = No`);
  }

  if (evenMax > 0) {
    console.log(`evenMax = ${evenMax.toFixed(2)}`);
  } else {
    console.log(`EvenMax = No`);
  }

  if (evenMin > 0) {
    console.log(`EvenMin = ${evenMin.toFixed(2)}`);
  } else {
    console.log(`EvenMin = No`);
  }

  if (evenSum > 0) {
    console.log(`evenSum = ${evenSum.toFixed(2)}`);
  } else {
    console.log(`EvenSum = No`);
  }
}

oddEvenPositions([6, 2, 3, 5, 4, 2, 1]);
oddEvenPositions([1, 1]);
