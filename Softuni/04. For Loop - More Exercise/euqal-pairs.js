"use strict";

function equalPairs(input) {
  let index = 0;
  let n = input[index++];
  let maxDiff = 0;
  let lastPair = 0;

  for (let i = 0; i < n; i++) {
    let firstNum = input[index++];
    let secondNum = input[index++];
    let currentPair = firstNum + secondNum;
    if (i > 0) {
      let diff = Math.abs(currentPair - lastPair);
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
    lastPair = currentPair;
  }
  if (maxDiff === 0) {
    console.log(`Yes, value = ${lastPair}`);
  } else {
    console.log(`No, maxdiff = ${maxDiff}`);
  }
}

// equalPairs([3, 1, 2, 0, 3, 4, -1]);
// equalPairs([2, 1, 2, 2, 2]);
equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
