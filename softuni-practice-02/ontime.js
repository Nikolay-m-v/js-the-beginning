"use strict";

function onTimeForExam(params) {
  let hourExamStarts = Number(params[0]);
  let minuteExamStarts = Number(params[1]);
  let hourStudentArrives = Number(params[2]);
  let minuteStudentArrives = Number(params[3]);

  let examTime = hourExamStarts * 60 + minuteExamStarts;
  let comeTime = hourStudentArrives * 60 + minuteStudentArrives;
  let minutesDifference = comeTime - examTime;
  let hours = Math.floor(Math.abs(minutesDifference / 60));
  let minutes = Math.abs(minutesDifference % 60);

  if (comeTime === examTime) {
    console.log("On time");
  } else if (minutesDifference < -30) {
    console.log("Early");
  } else if (minutesDifference < 0) {
    console.log("On time");
  } else if (minutesDifference == 0) {
    console.log("On time");
  } else {
    console.log("Late");
  }

  if (hours > 0) {
    if (minutes < 10) {
      console.log(hours + ":0" + minutes + " hours");
    } else {
      console.log(hours + ":" + minutes + " hours");
    }
  } else {
    console.log(minutes + " minutes");
  }
  if (minutesDifference < 0) {
    console.log(" before the start");
  } else {
    console.log(" after the start");
  }
}

onTimeForExam(["9", "30", "9", "50"]);
onTimeForExam(["9", "00", "8", "30"]);
onTimeForExam(["16", "00", "15", "00"]);
onTimeForExam(["9", "00", "10", "30"]);
onTimeForExam(["14", "00", "13", "55"]);
onTimeForExam(["11", "30", "8", "12"]);
onTimeForExam(["10", "00", "10", "00"]);
onTimeForExam(["11", "30", "10", "55"]);
onTimeForExam(["11", "30", "12", "29"]);
