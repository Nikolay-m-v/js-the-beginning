"use strict";

function scores(input) {
  let students = input[0];
  let totalScore = 0;
  let under3 = 0;
  let between3And4 = 0;
  let between4And5 = 0;
  let fiveOrMore = 0;
  for (let i = 1; i < input.length; i++) {
    let currentScore = input[i];
    if (currentScore < 3) {
      under3++;
    } else if (currentScore >= 3 && currentScore < 4) {
      between3And4++;
    } else if (currentScore >= 4 && currentScore < 5) {
      between4And5++;
    } else {
      fiveOrMore++;
    }
    totalScore += currentScore;
  }
  totalScore /= students;
  let under3Percentage = (under3 / students) * 100;
  let between3And4Percentage = (between3And4 / students) * 100;
  let between4And5Percentage = (between4And5 / students) * 100;
  let fiveOrMorePercentage = (fiveOrMore / students) * 100;
  console.log(`Top students: ${fiveOrMorePercentage.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${between4And5Percentage.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${between3And4Percentage.toFixed(2)}%`);
  console.log(`Fail: ${under3Percentage.toFixed(2)}%`);
  console.log(`Average: ${totalScore.toFixed(2)}`);
}

scores([10, 3.0, 2.99, 5.68, 3.01, 4, 4, 6.0, 4.5, 2.44, 5]);
