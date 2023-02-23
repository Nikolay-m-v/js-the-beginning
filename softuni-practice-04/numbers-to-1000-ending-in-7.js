"use strict";

function numbersTo1000By7(input) {
  let n = Number(input[0]);
  for (let i = 7; i < 1000; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}

numbersTo1000By7(1000);
