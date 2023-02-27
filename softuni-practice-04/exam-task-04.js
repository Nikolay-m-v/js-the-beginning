"use strict";

// Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса.
// Академията ще ви даде първоначални точки за актьора. След това всеки оценяващ ще дава своята оценка.
// Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две.
// Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация.

function oscars(input) {
  let name = String(input[0]);
  let pointsInAcademy = Number(input[1]);
  let amountOfPeopleEvulating = Number(input[2]);

  for (let i = 1; i <= input.length; i++) {
    let currentEvulatorOrPointsGivenByEvulator = input[i];
    console.log(str.currentEvulatorOrPointsGivenByEvulator);
  }
}
