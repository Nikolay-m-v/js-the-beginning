"use strict";

function processCommands(commands) {
  let result = 0;

  let iteration = 0;
  let commandOrParam = commands[iteration];

  while (commandOrParam !== "exit") {
    let param = Number(commands[iteration + 1]);

    if (commandOrParam === "add") {
      result += param;
    } else if (commandOrParam === "subtract") {
      result -= param;
    } else if (commandOrParam === "multiply") {
      result *= param;
    }

    iteration++;
    commandOrParam = commands[iteration];
  }

  console.log("Final result is: " + result);
}

processCommands([
  "add",
  "5",
  "subtract",
  "2",
  "multiply",
  "7",
  "exit",
  "add",
  "10",
]);
