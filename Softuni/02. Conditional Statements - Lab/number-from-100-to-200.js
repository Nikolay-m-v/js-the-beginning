"use strict";

function number100to200(input) {
  let number = Number(input[0]);
  if (number < 100) {
    console.log("less than 100");
  } else if (number > 99 && number < 201) {
    console.log("between 100 and 200");
  } else {
    console.log("greater than 200");
  }
}

number100to200(["95"]);
