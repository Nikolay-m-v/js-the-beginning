"use strict";

// Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса.
// Академията ще ви даде първоначални точки за актьора. След това всеки оценяващ ще дава своята оценка.
// Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две.
// Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация.

function oscars(input) {
  let pointer = 0;
  let actorName = input[pointer++];
  let pointsActor = Number(input[pointer++]);
  let judges = Number(input[pointer++]);
  let points = 0;

  for (let i = 0; i < judges; i++) {
    let judge = input[pointer++];
    let pointsJudge = Number(input[pointer++]);
    points = (judge.length * pointsJudge) / 2;
    pointsActor += points;
    if (pointsActor > 1250.5) {
      break;
    }
  }

  let diff = Math.abs(pointsActor - 1250.5);

  if (pointsActor > 1250.5) {
    console.log(
      "Congratulations, " +
        actorName +
        " got a nominee for leading role with " +
        pointsActor +
        "!"
    );
  } else {
    console.log(
      "Sorry, " + actorName + " you need " + diff.toFixed(2) + " more!"
    );
  }
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
