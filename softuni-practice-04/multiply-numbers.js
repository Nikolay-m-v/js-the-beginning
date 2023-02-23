"use strict";

// Напишете функция, която получава аргумент число от 1 до 10 и принтира таблицата за умножение в конзолата.

function multiplyNumbers(input) {
  let n = Number(input[0]);
  for (let i = 1; i <= 10; i++) {
    console.log(i + " * " + n + " = " + n * i);
  }
}

multiplyNumbers(["5"]);
