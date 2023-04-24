"use strict";

// Деси много обича да гледа филми, но често й е трудно да си избере подходящ за гледане. Набелязва си
// определен брой филми и иска да си избере кой филм да гледа спрямо рейтинга на филмите.
// Напишете програма, която показва кой филм е с най-висок рейтинг, кой е с най-нисък и колко е средният
// рейтинг от всички филми, които си е набелязала да гледа.

function movieRatings(input) {
  let index = 0;
  let movies = Number(input[index++]);
  let rating = 0;
  let bestMovie = "";
  let worstMovie = "";
  let bestRating = 0;
  let worstRating = 10;

  for (let i = 0; i < movies; i++) {
    let currentMovie = input[index++];
    let currentRating = Number(input[index++]);
    if (currentRating > bestRating) {
      bestRating = currentRating;
      bestMovie = currentMovie;
    }

    if (currentRating < worstRating) {
      worstRating = currentRating;
      worstMovie = currentMovie;
    }

    rating += currentRating;
  }
  let averageRating = rating / movies;
  console.log(bestMovie + " is with highest rating: " + bestRating);
  console.log(worstMovie + " is with lowest rating: " + worstRating);
  console.log("Average Rating: " + averageRating.toFixed(1));
}

movieRatings([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
