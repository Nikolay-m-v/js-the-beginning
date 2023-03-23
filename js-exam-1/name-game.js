"use strict";

// Иван е измислил нова игра в която да се състезава със своите приятели.
// Вашата задача е да напишете програма за играта.
// Всеки играч написва името си, след това за всяка една буква от името си написва по едно цяло число,
// ако числото съвпада с ASCII стойността на съответната буква, играчът получава 10 точки, в противен случай, получава само 2 точки.
// Победител е играчът с най-много точки в края на играта. В случай, че двама играчи имат равен брой точки, печели този,
// който втори е достигнал резултата.

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
