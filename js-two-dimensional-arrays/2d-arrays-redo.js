"use strict";

// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

function print2d(input) {
  for (let i = 0; i < input.length; i++) {
    let subarray = input[i];
    for (let j = 0; j < subarray.length; j++) {
      console.log(subarray[j]);
    }
  }
}

let array1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];
print2d(array1);
// prints
//  a
//  b
//  c
//  d
//  e
//  f
//  g
//  h
//  i

let array2 = [[9, 3, 4], [11], [42, 100]];
print2d(array2);
// prints
//  9
//  3
//  4
//  11
//  42
//  100

///////////////////    TASK 2

// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

function makeMatrix(m, n, value) {
  let array = [];

  for (let i = 0; i < m; i++) {
    let row = [];
    array.push(row);
    for (let j = 0; j < n; j++) {
      row.push(value);
    }
  }
  console.log(array);
}

console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, "x"));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]

/////////////////// TASK 3

// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

function totalProduct(input) {
  let result = 1;
  for (let i = 0; i < input.length; i++) {
    let taskThreeSubarray = input[i];
    for (let j = 0; j < taskThreeSubarray.length; j++) {
      result *= taskThreeSubarray[j];
    }
  }
  return result;
}

let taskThreeArray1 = [
  [3, 5, 2],
  [6, 2],
];
console.log(totalProduct(taskThreeArray1)); // 360

let taskThreeArray2 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
console.log(totalProduct(taskThreeArray2)); // 288

///////////////////// TASK 4

// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

function twoSumPairs(numbers, target) {
  let array = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0 + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        let pair = [numbers[i], numbers[j]];
        array.push(pair);
      }
    }
  }
  return array;
}

console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
console.log(twoSumPairs([3, 9, 8], 10)); // [ ]
