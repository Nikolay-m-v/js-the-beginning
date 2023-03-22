"use strict";

// Любо е голям почитател на киното и редовно ходи на прожекции и участва в томболи, от които често печели
// ваучери за кино. Вашата задача е да напишете програма, която да изчислява колко покупки от киното може
// да си купи Любо със спечеленият ваучер. Ако името на покупката съдържа повече от 8 символа, то тя е билет
// за филм, а нейната цена представлява сумата на ASCII символите от първите ѝ два символа. Ако името на
// покупката съдържа 8 или по-малко символа, нейната цена е равна на стойността на първия ASCII символ в
// името. Любо въвежда името на покупките, които желае, докато не въведе "End" или не въведе покупка,
// чиято стойност е по-голяма от останалата сума на ваучера.

function cinemaVouchers(input) {
  let index = 1;
  let command = input[index++];
  let sumVouchers = Number(input[0]);
  let ticketPrice = 0;
  let counter = 0;
  let counterTwo = 0;
  let moneyLeft = 0;

  while (command !== "End") {
    let movieName = command;
    let length = movieName.length;
    if (length > 8) {
      let letter1 = command[0];
      let letter2 = command[1];
      let asciNumber1 = letter1.charCodeAt(0);
      let asciNumber2 = letter2.charCodeAt(0);
      ticketPrice = asciNumber1 + asciNumber2;
      moneyLeft = sumVouchers - ticketPrice;
      if (ticketPrice <= sumVouchers) {
        counter++;
      }
    } else {
      let letter1 = command[0];
      let asciNumber1 = letter1.charCodeAt(0);
      if (asciNumber1 < moneyLeft) {
        let moneyLeftAfterSecondTicket = moneyLeft - asciNumber1;
        counterTwo++;
      } else {
        break;
      }
    }
    command = input[index++];
  }
  console.log(counter);
  console.log(counterTwo);
}

// cinemaVouchers(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVouchers([
  "1500",
  "Avengers: Endgame",
  "Bohemian Rhapsody",
  "Deadpool 2",
  "End",
]);
