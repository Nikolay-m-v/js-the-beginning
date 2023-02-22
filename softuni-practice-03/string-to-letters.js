"use strict";

// Напишете функция, която получава текст (стринг) и печата всеки символ от текста на отделен ред.

function stringToLetters(input) {
  let word = String(input[0]);
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    console.log(letter);
  }
}

stringToLetters(["softuni"]);
stringToLetters(["icecream"]);
