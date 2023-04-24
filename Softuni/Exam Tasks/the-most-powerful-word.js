"use strict";

// За Лора думите притежават голяма сила. Тя те моли да измислиш алгоритъм, с който да откриеш коя е "най-силната" дума.
//  До получаване на команда "End of words" ще се четат от конзолата думи. За да се открие
// силата на всяка една, трябва да се намери сборът от ASCII стойностите на символите, от които се състои
// думата. Ако започва с гласна буква - 'a', 'e', 'i', 'o', 'u', 'y' (или техните еквивалентни главни букви),
// полученият сбор трябва да се умножи по дължината на думата, в противен случай, да се раздели на
// дължината и да се закръгли до най-близкото цяло число надолу.

function mostPowerfulWord(input) {
  let index = 0;
  let command = input[index++];
  let shouldMultiply = false;
  let shouldDivide = false;
  let strLength = 0;
  let totalPoints = 0;
  let winner = "";

  while (command !== "End of words") {
    let currentWord = command;
    let totalScore = 0;
    for (let i = 0; i < currentWord.length; i++) {
      let charLetter = currentWord[i];
      strLength = currentWord.toString().length;
      let num = charLetter.charCodeAt(0);
      totalScore += num;
      let firstCharLetter = currentWord["0"];

      if (
        firstCharLetter === "a" ||
        firstCharLetter === "e" ||
        firstCharLetter === "i" ||
        firstCharLetter === "o" ||
        firstCharLetter === "y" ||
        firstCharLetter === "A" ||
        firstCharLetter === "E" ||
        firstCharLetter === "I" ||
        firstCharLetter === "O" ||
        firstCharLetter === "Y"
      ) {
        shouldMultiply = true;
      } else {
        shouldDivide = true;
      }
    }
    if (shouldMultiply) {
      totalScore = totalScore * strLength;
    } else if (shouldDivide) {
      totalScore = totalScore / strLength;
    }

    if (totalScore > totalPoints) {
      totalPoints = totalScore;
      winner = currentWord;
    }
    command = input[index++];
  }

  console.log("The most powerful word is " + winner + " - " + totalPoints);
}

mostPowerfulWord([
  "The",
  "Most",
  "Powerful",
  "Word",
  "Is",
  "Experience",
  "End of words",
]);
mostPowerfulWord([
  "But",
  "Some",
  "People",
  "Say",
  "It's",
  "LOVE",
  "End of words",
]);
