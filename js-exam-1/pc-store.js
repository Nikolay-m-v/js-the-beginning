"use strict";

function pcStore(input) {
  let index = 0;
  let games = Number(input[index++]);
  let hearthstoneCounter = 0;
  let fortniteCounter = 0;
  let overwatchCounter = 0;
  let counterstrikeCounter = 0;

  for (let i = 0; i < games; i++) {
    let currentGame = input[index++];
    if (currentGame === "Hearthstone") {
      hearthstoneCounter++;
    } else if (currentGame === "Fortnite") {
      fortniteCounter++;
    } else if (currentGame === "Overwatch") {
      overwatchCounter++;
    } else if (currentGame === "Counter-strike") {
      counterstrikeCounter++;
    }
  }
  let percentageHs = (hearthstoneCounter / games) * 100;
  let percentageFn = (fortniteCounter / games) * 100;
  let percentageOw = (overwatchCounter / games) * 100;
  let percentageCs = (counterstrikeCounter / games) * 100;

  console.log(games);
  console.log("Hearthstone - " + percentageHs.toFixed(2) + "%");
  console.log("Fortnite - " + percentageFn.toFixed(2) + "%");
  console.log("Overwatch - " + percentageOw.toFixed(2) + "%");
  console.log("Counter-strike - " + percentageCs.toFixed(2) + "%");
}

pcStore(["4", "Hearthstone", "Fortnite", "Overwatch", "Counter-strike"]);
