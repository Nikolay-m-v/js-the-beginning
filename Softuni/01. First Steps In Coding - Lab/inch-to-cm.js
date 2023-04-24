"use strict";

function inchToCm(input) {
  let number = Number(input[0]);
  let inch = 2.54;
  let cm = number * inch;
  console.log(cm);
}

inchToCm(["5"]);
