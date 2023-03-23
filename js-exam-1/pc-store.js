"use strict";

// Магазин за компютърни игри ви наема за да направите статистика на процента продажби на игрите от
// последния месец, като изчислите по колко процента от общите продажби са за някоя от игрите.
// Процентите трябва да бъдат разделени на четири части, три заглавия на игри и всички останали :
// • Hearthstone
// • Fornite
// • Overwatch
// • Others

function pcStore(input) {
  let index = 0;
  let games = Number(input[index++]);
  let hearthstoneCounter = 0;
  let fortniteCounter = 0;
  let overwatchCounter = 0;
  let othersCounter = 0;

  for (let i = 0; i < games; i++) {
    let currentGame = input[index++];
    if (currentGame === "Hearthstone") {
      hearthstoneCounter++;
    } else if (currentGame === "Fortnite") {
      fortniteCounter++;
    } else if (currentGame === "Overwatch") {
      overwatchCounter++;
    } else {
      othersCounter++;
    }
  }
  let percentageHs = (hearthstoneCounter / games) * 100;
  let percentageFn = (fortniteCounter / games) * 100;
  let percentageOw = (overwatchCounter / games) * 100;
  let percentageOthers = (othersCounter / games) * 100;

  console.log(games);
  console.log("Hearthstone - " + percentageHs.toFixed(2) + "%");
  console.log("Fortnite - " + percentageFn.toFixed(2) + "%");
  console.log("Overwatch - " + percentageOw.toFixed(2) + "%");
  console.log("Others - " + percentageOthers.toFixed(2) + "%");
}

pcStore(["4", "Hearthstone", "Fortnite", "Overwatch", "Counter-strike"]);
