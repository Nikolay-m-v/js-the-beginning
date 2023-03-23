"use strict";

function nameGame(input) {
  let index = 0;
  let command = input[index++];
  let totalScore = 0;
  let winner = "";

  while (command !== "Stop") {
    let currentPlayer = command;
    let points = 0;
    for (let i = 0; i < command.length; i++) {
      let number = Number(input[index++]);
      let charLetter = currentPlayer[i];
      let num = charLetter.charCodeAt(0);
      if (num === number) {
        points += 10;
      } else {
        points += 2;
      }
    }
    if (points > totalScore) {
      totalScore = points;
      winner = currentPlayer;
    }
    command = input[index++];
  }
  console.log("The winner is " + winner + " with " + totalScore + " points");
}

nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
