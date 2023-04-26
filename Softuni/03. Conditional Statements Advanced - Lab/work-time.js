"use strict";

function workTime(input) {
  let hour = Number(input[0]);
  let day = input[1];

  if (hour > 9 && hour < 19) {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      default:
        console.log("closed");
    }
  } else {
    console.log("closed");
  }
}

workTime(["11", "Monday"]);
workTime(["19", "Friday"]);
workTime(["11", "Sunday"]);
