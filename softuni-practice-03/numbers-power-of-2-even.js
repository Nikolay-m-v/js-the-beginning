"use strict";

// Да се напише функция, която получава число n и печата четните степени на 2 ≤ 2n: 20, 22, 24, 26, …, 2n.

function powerOfTwoEven(lines) {
  let power = Number(lines[0]);

  for (let i = 0; i <= power; i += 2) {
    console.log(Math.pow(2, i));
  }
}

powerOfTwoEven(["3"]);
powerOfTwoEven(["4"]);
powerOfTwoEven(["5"]);
powerOfTwoEven(["6"]);
powerOfTwoEven(["7"]);
powerOfTwoEven(["8"]);
