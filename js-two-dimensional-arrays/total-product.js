"use strict";

// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

function totalProduct(array) {
  let totalProducts = 1;

  for (let i = 0; i < array.length; i++) {
    let subarray = array[i];

    for (let j = 0; j < subarray.length; j++) {
      totalProducts *= subarray[j];
    }
  }

  return totalProducts;
}

totalProduct([
  [3, 5, 2],
  [6, 2],
]);

let array1 = [
  [3, 5, 2],
  [6, 2],
];
console.log(totalProduct(array1)); // 360

let array2 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
console.log(totalProduct(array2)); // 288
