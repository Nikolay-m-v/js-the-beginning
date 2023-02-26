"use strict";

// Напишете програма, която да умножава положителни числа по 2.
// От конзолата се четат поредица от реални числа, всяко на нов ред, докато не се въведе отрицателно. След всяко умножено число на нов ред да се отпечата "Result: {резултата от умножението}". Резултата от умножението да бъде форматиран до втория знак след десетичния разделител.
// При получаване на негативно число, на конзолата да се отпечата "Negative number!" и програмата да приключи изпълнение.

function multiplyByTwo(input) {
  let numberOne = Number(input[0]);
  let numberTwo = Number(input[1]);
  let numberThree = Number(input[2]);
  let numberFour = Number(input[3]);
  let numberFive = Number(input[4]);

  // for (let i = 0; i < 0; i++) {
  //   currentNumber = input[i];
  //   currentNumber * 2;
  //   console.log(currentNumber);
  // }

  while (i > 0) {
    let currentNumber = input[i];
    currentNumber * 2;
    currentNumber++;
    console.log(currentNumber * 2);
  }
}

multiplyByTwo(["12", "43.2144", "12.3", "543.22", "-20"]);
