"use strict";

// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array

function print2d(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      console.log(input[i][j]);
    }
  }
}

print2d([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
]);
