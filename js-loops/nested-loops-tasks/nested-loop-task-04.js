// Напишете функция, която проверява всички възможни комбинации от двойка числа в интервала от две дадени числа.
// На изхода се отпечатва, коя поред е първата комбинацията, чийто сбор от числата е равен на дадено магическо число.
// Ако няма нито една комбинация отговаряща на условието се отпечатва съобщение, че не е намерено.

"use strict";

function sumOfTwoNumbers(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let magicNumber = Number(input[2]);
  let counter = 0;
  let combinationCounter = 0;

  for (let i = startNumber; i <= endNumber; i++) {
    if (combinationCounter > 0) {
      break;
    }
    for (let j = startNumber; j <= endNumber; j++) {
      counter++;
      if (i + j === magicNumber) {
        combinationCounter++;
        console.log("combination N:" + counter);
        console.log(i + "+" + j + "=" + magicNumber);
      }
    }
  }
  if (combinationCounter < 1) {
    console.log("combinations:" + counter);
    console.log("neither equals " + magicNumber);
  }
}

sumOfTwoNumbers([1, 10, 5]);
sumOfTwoNumbers([23, 24, 20]);
sumOfTwoNumbers([88, 888, 1000]);
sumOfTwoNumbers([88, 888, 2000]);
