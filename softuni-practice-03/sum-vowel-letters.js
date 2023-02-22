"use strict";

// Да се напише функция, която получава, изчислява и отпечатва сумата от стойностите на гласните букви според таблицата по-долу:
// буква
// a e i o u
// 1 2 3 4 5

function sumVowelLetters(input) {
  let word = String(input[0]);
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "a") {
      sum += 1;
    } else if (word[i] == "e") {
      sum += 2;
    } else if (word[i] == "i") {
      sum += 3;
    } else if (word[i] == "o") {
      sum += 4;
    } else if (word[i] == "u") {
      sum += 5;
    }
  }
  console.log(sum);
}

sumVowelLetters(["hello"]);
sumVowelLetters(["hi"]);
sumVowelLetters(["bamboo"]);
sumVowelLetters(["beer"]);
