"use strict";

// Задачата ви е да напишете програма, която приема името на отбор и прави статистика за него. През един
// сезон всеки отбор изиграва определен брой футболни срещи, като за всяка среща на отбора се дават точки в
// зависимост от изхода от срещата. Има три възможни изхода от една среща:
// ▪ W - Отборът е победител и получава 3 точки
// ▪ D - Срещата е завършила без победител и отборът получава 1 точка
// ▪ L - Отборът е загубил срещата и не получава точки
// Напишете програма, която приема името на футболен отбор и извежда неговата статистика, на база на
// изиграните срещи през този сезон. Неговата статистика трябва да включва общия брой спечелени точки през
// настоящия сезон, подробна статистика за изхода на изиграните игри и процент победи през сезона. Ако
// отборът по някаква причина не е играл мачове през настоящия сезон се извежда специално съобщение.

function footballTournament(input) {
  let index = 0;
  let teamName = String(input[index++]);
  let numberOfGames = Number(input[index++]);
  let points = 0;
  let wins = 0;
  let draws = 0;
  let losses = 0;

  for (let i = 0; i < numberOfGames; i++) {
    let currentGame = input[index++];
    if (currentGame === "W") {
      points += 3;
      wins++;
    } else if (currentGame === "D") {
      points += 1;
      draws++;
    } else if (currentGame === "L") {
      losses++;
    }
  }
  let winRate = (wins / numberOfGames) * 100;
  if (numberOfGames === 0) {
    console.log(teamName + " has not played any games this season!");
  } else {
    console.log(teamName + " has won " + points + " during this season.");
    console.log("Total stats:");
    console.log("## W: " + wins);
    console.log("## D: " + draws);
    console.log("## L: " + losses);
    console.log("Win rate: " + winRate.toFixed(2) + "%");
  }
}

footballTournament([
  "Liverpool",
  "10",
  "W",
  "D",
  "D",
  "W",
  "L",
  "W",
  "D",
  "D",
  "W",
  "W",
]);
footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
footballTournament(["Chelsea", "0"]);
