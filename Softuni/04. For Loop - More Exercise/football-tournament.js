"use strict";

function footballTournament(input) {
  let stadiumCapactity = input[0];
  let fans = input[1];
  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;
  for (let i = 2; i < input.length; i++) {
    let currentFan = input[i];
    if (currentFan === "A") {
      sectorA++;
    } else if (currentFan === "B") {
      sectorB++;
    } else if (currentFan === "V") {
      sectorV++;
    } else if (currentFan === "G") {
      sectorG++;
    }
  }

  let sectorAPercentage = (sectorA / fans) * 100;
  let sectorBPercentage = (sectorB / fans) * 100;
  let sectorVPercentage = (sectorV / fans) * 100;
  let sectorGPercentage = (sectorG / fans) * 100;
  let fansPercentage = (fans / stadiumCapactity) * 100;
  console.log(`${sectorAPercentage.toFixed(2)}%`);
  console.log(`${sectorBPercentage.toFixed(2)}%`);
  console.log(`${sectorVPercentage.toFixed(2)}%`);
  console.log(`${sectorGPercentage.toFixed(2)}%`);
  console.log(`${fansPercentage.toFixed(2)}%`);
}

footballTournament([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
