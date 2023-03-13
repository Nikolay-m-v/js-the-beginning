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

// TASK 2

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
