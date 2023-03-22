"use strict";

// Пешо решава, че иска да направи ремонт вкъщи. Неговата задача е да боядиса стените в хола, като знаете
// височината и ширината на една стена. Холът на Пешо има 4 стени с еднакви размери, определен процент от
// които се заемат от прозорци и врати, които няма да бъдат боядисвани. Той не е сигурен дали ще успее
// наведнъж, затова моли Вас да му помогнете да изчисли дали ще му остава още работа за следващия ден и,
// ако да, колко кв. м. има да довърши, а в случай, че успее да боядиса хола, колко боя му е останала (трябва
// да се има предвид, че с един литър боя се боядисва един квадратен метър от стената)

function renovation(input) {
  let index = 0;
  let height = Number(input[index++]);
  let width = Number(input[index++]);
  let wallsNotPainted = Number(input[index++]);
  let wallsToPaint = height * width * 4;
  let finalSquaresToPaint = Math.ceil(
    wallsToPaint - (wallsNotPainted / 100) * wallsToPaint
  );
  let command = input[index++];

  while (command !== "Tired!") {
    let liters = Number(command);
    finalSquaresToPaint -= liters;
    if (finalSquaresToPaint <= 0) {
      break;
    }
    command = input[index++];
  }
  if (finalSquaresToPaint > 0) {
    console.log(finalSquaresToPaint + " quadric m left.");
  } else if (finalSquaresToPaint === 0) {
    console.log("All walls are painted! Great job, Pesho!");
  } else {
    console.log(
      "All walls are painted and youy have " +
        Math.abs(finalSquaresToPaint) +
        " l paint left"
    );
  }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]);
