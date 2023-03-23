"use strict";

// За Лора думите притежават голяма сила. Тя те моли да измислиш алгоритъм, с който да откриеш коя е "найсилната" дума.
//  До получаване на команда "End of words" ще се четат от конзолата думи. За да се открие
// силата на всяка една, трябва да се намери сборът от ASCII стойностите на символите, от които се състои
// думата. Ако започва с гласна буква - 'a', 'e', 'i', 'o', 'u', 'y' (или техните еквивалентни главни букви),
// полученият сбор трябва да се умножи по дължината на думата, в противен случай, да се раздели на
// дължината и да се закръгли до най-близкото цяло число надолу.

function mostPowerfulWord(input) {
  let index = 0;
  let command = input[index++];
  let shouldMultiply = false;
  let strLength = 0;

  while (command !== "End of words") {
    let currentWord = command;
    let totalScore = 0;
    for (let i = 0; i < command.length; i++) {
      let charLetter = currentWord[i];
      strLength = currentWord.toString().length;
      let num = charLetter.charCodeAt(0);
      totalScore += num;
      if (
        currentWord[0] === "a" ||
        currentWord[0] === "e" ||
        currentWord[0] === "i" ||
        currentWord[0] === "o" ||
        currentWord[0] === "y" ||
        currentWord[0] === "A" ||
        currentWord[0] === "E" ||
        currentWord[0] === "I" ||
        currentWord[0] === "O" ||
        currentWord[0] === "Y"
      ) {
        shouldMultiply = true;
      }
    }
    if (shouldMultiply) {
      let multipliedScore = totalScore * strLength;
      console.log(multipliedScore);
    } else {
      let dividedScore = totalScore / strLength;
      console.log(Math.floor(dividedScore));
    }

    command = input[index++];
  }
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
