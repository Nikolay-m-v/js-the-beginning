"use strict";

function oneToNByThree(input) {
  let n = Number(input[0]);

  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}

oneToNByThree(["10"]);
oneToNByThree(["7"]);
oneToNByThree(["15"]);
