"use strict";

// Напишете програма, която проверява дали точка {x, y} се намира върху някоя от страните на правоъгълник {x1, y1} – {x2, y2}.
// Входните данни се четат от конзолата и се състоят от 6 реда въведени от потребителя: десетичните числа x1, y1, x2, y2, x и y (като се гарантира, че x1 < x2 и y1 < y2).
// Да се отпечата "Border" (точката лежи на някоя от страните) или "Inside / Outside" (в противен случай).

function rectangle(input) {
  let x1 = Number(input[0]);
  let y1 = Number(input[1]);
  let x2 = Number(input[2]);
  let y2 = Number(input[3]);
  let x = Number(input[4]);
  let y = Number(input[5]);

  x2 > x1;
  y2 > y1;

  if (x === x1 || x === x2) {
    if (y > y1 && y < y2) {
      console.log("Border");
    }
  } else if (y === y1 || y === y2) {
    if (x > x1 && x < x2) {
      console.log("Border");
    }
  } else if (x > x1) {
    if (x < x2) {
      console.log("Inside / Outside");
    }
  } else if (y > y1) {
    if (y < y2) {
      console.log("Inside / Outside");
    }
  }
}

rectangle(["2", "-3", "12", "3", "8", "-1"]);
rectangle(["2", "-3", "12", "3", "12", "-1"]);
