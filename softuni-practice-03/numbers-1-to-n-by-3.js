"use strict";

// Напишете функция, която получава число n и отпечатва числата от 1 до n през 3.

function oneToNByThree(input) {
  let n = Number(input[0]);

  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}

oneToNByThree(["10"]);
oneToNByThree(["7"]);
oneToNByThree(["15"]);
