"use strict";

function backInTime(money, year) {
  let startingYear = 1800;
  let age = 18;

  for (let i = 1800; i <= 1802; i++) {
    if (i % 2 === 0) {
      money -= 12000;
    } else {
      money -= 12000 + age * 50;
    }
    age++;
  }
  if (money > 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${money.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(`He will need ${money.toFixed(2)} dollars to survive.`);
  }
}

backInTime(50000, 1802);
backInTime(100000.15, 1808);
