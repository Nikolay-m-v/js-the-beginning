"use strict";

function tvSeriesCalculator(seriesName, seasons, episodes, episodeLength) {
  let adsLength = 0.2 * episodeLength;
  let episodeLengthWithAds = episodeLength + adsLength;
  let lastEpisodeLengthAddition = 10;
  let totalTimelastEpisodesAddition = seasons * lastEpisodeLengthAddition;
  let totalTimeInMinutesToWatch =
    episodeLengthWithAds * episodes * seasons + totalTimelastEpisodesAddition;

  console.log(
    `Total time needed to watch ${seriesName} is ${totalTimeInMinutesToWatch} minutes`
  );
}

tvSeriesCalculator("Lucifer", 3, 18, 55);
