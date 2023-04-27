"use strict";

function intervalGame(input) {
  let gameMoves = input[0];
  let score = 0;
  let invalid = 0;
  let under10 = 0;
  let between10And20 = 0;
  let between20And30 = 0;
  let between30And40 = 0;
  let between40And50 = 0;

  for (let i = 1; i < input.length; i++) {
    let currentScore = input[i];
    if (currentScore < 0 || currentScore > 50) {
      invalid++;
      score /= 2;
    } else if (currentScore >= 0 && currentScore < 10) {
      under10++;
      score += currentScore * 0.2;
    } else if (currentScore > 9 && currentScore < 20) {
      between10And20++;
      score += currentScore * 0.3;
    } else if (currentScore > 19 && currentScore < 30) {
      between20And30++;
      score += currentScore * 0.4;
    } else if (currentScore > 29 && currentScore < 40) {
      between30And40++;
      score += 50;
    } else if (currentScore > 39 && currentScore <= 50) {
      between40And50++;
      score += 100;
    }
  }

  let under10Percentage = (under10 / gameMoves) * 100;
  let between10And20Percentage = (between10And20 / gameMoves) * 100;
  let between20And30Percentage = (between20And30 / gameMoves) * 100;
  let between30And40Percentage = (between30And40 / gameMoves) * 100;
  let between40And50Percentage = (between40And50 / gameMoves) * 100;
  let invalidPercentage = (invalid / gameMoves) * 100;

  console.log(score.toFixed(2));
  console.log(`From 0 to 9: ${under10Percentage}%`);
  console.log(`From 10 to 20: ${between10And20Percentage}%`);
  console.log(`From 20 to 30: ${between20And30Percentage}%`);
  console.log(`From 30 to 40: ${between30And40Percentage}%`);
  console.log(`From 40 to 50: ${between40And50Percentage}%`);
  console.log(`Invalid numbers: ${invalidPercentage}%`);
}

intervalGame([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
