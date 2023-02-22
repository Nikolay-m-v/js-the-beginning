"use strict";

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
