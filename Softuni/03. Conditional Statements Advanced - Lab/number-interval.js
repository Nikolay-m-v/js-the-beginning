"use strict";

function numberInterval(input) {
  let number = Number(input[0]);

  if (number > -100 && number !== 0 && number < 100) {
    console.log("Yes");
  } else {
    console.log("No!");
  }
}

numberInterval(["-25"]);
numberInterval(["0"]);
numberInterval(["111"]);
