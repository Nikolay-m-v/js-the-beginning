"use strict";

function sleepyCat(holidays) {
  let normalSleepForCat = 30000;
  let playTimeWithHumanIfWorkingPerDay = 63;
  let playTimeWithHumanIfHoliday = 127;
  let daysInYear = 365;
  let workingDays = daysInYear - holidays;
  let minutesToPlay = workingDays * playTimeWithHumanIfWorkingPerDay;
  let minutesToPlayOnHolidays = holidays * playTimeWithHumanIfHoliday;
  let totalMinutesToPlay = minutesToPlay + minutesToPlayOnHolidays;
  let difference = Math.abs(normalSleepForCat - totalMinutesToPlay);
  let hours = Math.floor(difference / 60);
  let minutes = difference % 60;

  if (normalSleepForCat > totalMinutesToPlay) {
    console.log("Tom sleeps Well");
    console.log(
      `${Math.floor(hours)} hours and ${minutes} minutes less for play`
    );
  } else {
    console.log("Tom will run away");
    console.log(`${hours} hours and ${minutes} minutes more for play`);
  }
}

sleepyCat(20);
sleepyCat(113);
