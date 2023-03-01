"use strict";

//Григор Димитров е тенисист, чиято следваща цел е изкачването в световната ранглиста по тенис за мъже.
// През годината Гришо участва в определен брой турнири, като за всеки турнир получава точки, които зависят от позицията, на която е завършил в турнира.
// Има три варианта за завършване на турнир:
// W - ако е победител получава 2000 точки
// F - ако е финалист получава 1200 точки
// SF - ако е полуфиналист получава 720 точки
// Напишете програма, която изчислява колко ще са точките на Григор след изиграване на всички турнири, като знаете с колко точки стартира сезона.
// Също изчислете колко точки средно печели от всички изиграни турнири и колко процента от турнирите е спечелил.

function tennisRanklist(input) {
  let tournaments = Number(input[0]);
  let points = Number(input[1]);
  let win = 2000;
  let finalist = 1200;
  let semiFinalist = 720;
  let averagePointsReceived = 0;
  let won = 0;

  for (let i = 2; i < input.length; i++) {
    let currentTournamentResult = input[i];
    if (currentTournamentResult === "W") {
      points += win;
      averagePointsReceived += win;
      won++;
    } else if (currentTournamentResult === "F") {
      points += finalist;
      averagePointsReceived += finalist;
    } else {
      points += semiFinalist;
      averagePointsReceived += semiFinalist;
    }
  }

  let wonPercentage = (won / tournaments) * 100;

  console.log("Final points: " + points);
  console.log("Average points: " + averagePointsReceived / tournaments);
  console.log(wonPercentage.toFixed(2) + "%");
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
