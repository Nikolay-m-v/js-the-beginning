"use strict";

//Иван решава да подобри Световния рекорд по плуване на дълги разстояния. Функцията получава: рекордът в секунди,  който Иван трябва да подобри,  разстоянието в метри, което трябва да преплува и времето в секунди, за което плува разстояние от 1 м. Да се напише функция, която изчислява дали се е справил със задачата, като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число.
//Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд.

function shopping(params) {
  let money = Number(params[0]);
  let amountOfVideoCards = Number(params[1]);
  let amountOfProcessors = Number(params[2]);
  let amountOfRamMemory = Number(params[3]);
  let videoCardPerUnit = 250;
  let processorPerUnit = amountOfVideoCards * (videoCardPerUnit * 0.35);
  let ramMemoryPerUnit = amountOfVideoCards * (videoCardPerUnit * 0.1);

  let moneyLeft =
    money -
    amountOfVideoCards * videoCardPerUnit -
    amountOfProcessors * processorPerUnit -
    amountOfRamMemory * ramMemoryPerUnit;

  let moneySpent = money - moneyLeft;

  if (amountOfVideoCards > amountOfProcessors) {
    moneySpent -= moneySpent * 0.15;
  }

  let moneyLeftAfterPercentageOff = money - moneySpent;
  let moneyLeftAfterPercentageOffAbsolute = Math.abs(
    moneyLeftAfterPercentageOff
  );

  if (money > moneySpent) {
    console.log("You have " + moneyLeftAfterPercentageOff + " leva left!");
  } else if (money < moneySpent) {
    console.log(
      "Not enough money! You need " +
        moneyLeftAfterPercentageOffAbsolute +
        " leva more!"
    );
  }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
