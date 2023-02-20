"use strict";

function onTimeForExam(params) {
  let hourExamStarts = Number(params[0]);
  let minutesExamStarts = Number(params[1]);
  let hourStudentArrives = Number(params[2]);
  let minutesStudentArrives = Number(params[3]);

  let examTimeInMinutes = hourExamStarts * 60 + minutesExamStarts;
  let arrivalTimeInMinutes = hourStudentArrives * 60 + minutesStudentArrives;

  let minutesDifference = arrivalTimeInMinutes - examTimeInMinutes;

  let cameBeforeExam = minutesDifference < 0;
  let cameAfterExam = minutesDifference > 0;
  let onTime = minutesDifference === 0;

  let hoursEarlyOrLate = Math.floor(Math.abs(minutesDifference / 60));
  let minutesEarlyOrLate = minutesDifference % 60;

  if (
    cameBeforeExam &&
    (Math.abs(minutesEarlyOrLate) > 30 || hoursEarlyOrLate >= 1)
  ) {
    console.log("Early");
  } else if (onTime || (cameBeforeExam && Math.abs(minutesEarlyOrLate) <= 30)) {
    console.log("On time");
  } else {
    console.log("Late");
  }

  if (!onTime) {
    if (cameBeforeExam) {
      if (hoursEarlyOrLate >= 1) {
        console.log(
          hoursEarlyOrLate +
            ":" +
            Math.abs(minutesEarlyOrLate) +
            " hours before the start"
        );
      } else {
        console.log(Math.abs(minutesEarlyOrLate) + " minutes before the start");
      }
    } else if (cameAfterExam) {
      if (hoursEarlyOrLate >= 1) {
        console.log(
          hoursEarlyOrLate +
            ":" +
            Math.abs(minutesEarlyOrLate) +
            " hours after the start"
        );
      } else {
        console.log(Math.abs(minutesEarlyOrLate) + " minutes after the start");
      }
    }
  }
}

onTimeForExam(["9", "30", "9", "50"]); // Late
onTimeForExam(["9", "00", "8", "30"]); // On time
onTimeForExam(["16", "00", "15", "00"]); // Early
onTimeForExam(["9", "00", "10", "30"]); // Late
onTimeForExam(["14", "00", "13", "55"]); // On time
onTimeForExam(["11", "30", "8", "12"]); // Early
onTimeForExam(["10", "00", "10", "00"]); // On time
onTimeForExam(["11", "30", "10", "55"]); // Early
onTimeForExam(["11", "30", "12", "29"]); // Late
