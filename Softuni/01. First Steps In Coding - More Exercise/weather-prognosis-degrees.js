"use strict";

function weatherDegrees(degrees) {
  if (degrees >= 26) {
    console.log("Hot");
  } else if (degrees > 20.1 && degrees < 26) {
    console.log("Warm");
  } else if (degrees > 15 && degrees < 20) {
    console.log("Mild");
  } else if (degrees > 12 && degrees < 15) {
    console.log("Cool");
  } else if (degrees > 5 && degrees < 12) {
    console.log("Cold");
  }
}

weatherDegrees(16.5);
weatherDegrees(22.4);
