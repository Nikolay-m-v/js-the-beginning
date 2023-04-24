"use strict";

// По време на обедната почивка искате да изгледате епизод от своя любим сериал.
// Вашата задача е да напишете програма, с която ще разберете дали имате достатъчно време да изгледате епизода.
// По време на почивката отделяте време за обяд и време за отдих.
// Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.

function lunchBreak(params) {
  let nameOfTvSeries = String(params[0]);
  let lengthOfOneEpisode = Number(params[1]);
  let lengthOfBreak = Number(params[2]);
  let timeForLunch = lengthOfBreak / 8;
  let timeForRest = lengthOfBreak / 4;
  let timeToWatchRestAndlunch = lengthOfOneEpisode + timeForLunch + timeForRest;
  let timeRemainingAfterLunchRestAndWatching =
    lengthOfBreak - lengthOfOneEpisode - timeForLunch - timeForRest;
  let timeRemainingAfterLunchRestAndWatchingFormatted = Math.ceil(
    Math.abs(timeRemainingAfterLunchRestAndWatching)
  );

  if (timeToWatchRestAndlunch <= lengthOfBreak) {
    console.log(
      "You have enough time to watch " +
        nameOfTvSeries +
        " and left with " +
        timeRemainingAfterLunchRestAndWatching +
        " free time."
    );
  } else if (timeToWatchRestAndlunch > lengthOfBreak) {
    console.log(
      "You don't have enough time to watch " +
        nameOfTvSeries +
        ", you need" +
        timeRemainingAfterLunchRestAndWatchingFormatted +
        " more minutes."
    );
  }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
