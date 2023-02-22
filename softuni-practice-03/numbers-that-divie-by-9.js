"use strict";

// Напишете функция, която получава две числа и принтира  на конзолата,
// всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума.
// На първия ред отпечатайте сумата на числата, а на следващите редове отговарящите на условието числа.

function numbersDivideBy9(input) {
  let numberOne = Number(input[0]);
  let numberTwo = Number(input[1]);
  let sum = 0;
  for (let i = numberOne; i <= numberTwo; i++) {
    if (i % 9 === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("The sum: " + sum);
}

numbersDivideBy9(["100", "200"]);
