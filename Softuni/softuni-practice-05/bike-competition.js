"use strict";

// Предстои Вело състезание за благотворителност в което участниците са разпределени в младша("juniors") и старша("seniors") група.
// Парите се набавят от таксата за участие на велосипедистите.
// Според възрастовата група и вида на трасето на което ще се провежда състезанието, таксата е различна.
// Група
// juniors
// seniors
// trail
// 5.50
// 7
// cross-country
// 8
// 9.50
// downhill
// 12.25
// 13.75
// road
// 20
// 21.50
// Ако в "cross-country" състезанието се съберат 50 или повече участника(общо младши и старши), таксата  намалява с 25%.
// Организаторите отделят 5% процента от събраната сума за разходи.

function bikeCompetition(input) {
  let amountOfJuniors = Number(input[0]);
  let amountOfSeniors = Number(input[1]);
  let typeOfTrack = String(input[2]);
  let taxPerJunior = 0;
  let taxPerSenior = 0;

  if (typeOfTrack === "trail") {
    taxPerJunior = 5.5;
    taxPerSenior = 7;
  } else if (typeOfTrack === "cross-country") {
    taxPerJunior = 8;
    taxPerSenior = 9.5;
    if (amountOfJuniors + amountOfSeniors >= 50) {
      taxPerJunior -= taxPerJunior * 0.25;
      taxPerSenior -= taxPerSenior * 0.25;
    }
  } else if (typeOfTrack === "downhill") {
    taxPerJunior = 12.25;
    taxPerSenior = 13.75;
  } else {
    taxPerJunior = 20;
    taxPerSenior = 21.5;
  }

  let totalSum =
    amountOfJuniors * taxPerJunior + amountOfSeniors * taxPerSenior;
  let taxOrganization = totalSum * 0.05;
  let totalSumAfterTaxes = totalSum - taxOrganization;

  console.log(totalSumAfterTaxes.toFixed(2));
}

bikeCompetition(["10", "20", "trail"]);
bikeCompetition(["21", "26", "cross-country"]);
bikeCompetition(["30", "25", "cross-country"]);
bikeCompetition(["10", "10", "downhill"]);
bikeCompetition(["3", "40", "road"]);
