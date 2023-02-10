"use strict";

//Иван решава да подобри Световния рекорд по плуване на дълги разстояния. Функцията получава: рекордът в секунди,  който Иван трябва да подобри,  разстоянието в метри, което трябва да преплува и времето в секунди, за което плува разстояние от 1 м. Да се напише функция, която изчислява дали се е справил със задачата, като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число.
//Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд.

function swimRecord(params) {
  let seconds = Number(params[0]);
  let lengthInMeters = Number(params[1]);
  let secondsToSwimOneMeter = Number(params[2]);
  let waterCurrentSlowdownEveryFifteenMeters = 12.5;
  let timeToSwimFullLength = lengthInMeters * secondsToSwimOneMeter;
  let timeLostFromWaterCurrent =
    (lengthInMeters / 15) * waterCurrentSlowdownEveryFifteenMeters;
  let totalTimeItTook = timeToSwimFullLength + timeLostFromWaterCurrent;
  let totalTime = timeToSwimFullLength + timeLostFromWaterCurrent - seconds;
  let totalTimeItTookRounded = Math.floor(totalTimeItTook);

  if (seconds < totalTime) {
    console.log("No, he failed! He was " + totalTime + " seconds slower.");
  } else if (seconds > totalTimeItTook) {
    console.log(
      "Yes, he succeeded! The new world record is " +
        totalTimeItTookRounded +
        " seconds."
    );
  }
}

swimRecord(["10464", "1500", "20"]);
swimRecord(["55555.67", "3017", "5.03"]);
