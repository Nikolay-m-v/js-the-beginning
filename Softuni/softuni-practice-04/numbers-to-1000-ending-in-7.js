"use strict";

// Напишете функция, която отпечатва числата в диапазона от 1 до 1000, които завършват на 7.

function numbersTo1000By7(input) {
  let n = Number(input[0]);
  for (let i = 7; i < 1000; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}

numbersTo1000By7(1000);
