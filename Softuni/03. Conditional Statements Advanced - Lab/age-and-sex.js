"use strict";

function sexAge(input) {
  let age = Number(input[0]);
  let sex = input[1];
  if (sex === "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else if (age < 16) {
      console.log("Master");
    }
  } else if (sex === "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else if (age < 16) {
      console.log("Miss");
    }
  }
}

sexAge(["12", "f"]);
sexAge(["25", "m"]);
