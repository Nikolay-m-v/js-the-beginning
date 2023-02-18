"use strict";

// Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете функция,
// която спрямо времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече.
// Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от таблицата.

function summerClothes(degrees, timeOfDay) {
  let degreesInCelsius = degrees;
  let currentTimeOfDay = timeOfDay;
  let outfit;
  let shoes;

  if (degreesInCelsius >= 10 && degreesInCelsius <= 18) {
    if (timeOfDay === "Morning") {
      let outfit = "sweatshirt";
      let shoes = "sneakers";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    } else if (timeOfDay === "Afternoon") {
      let outfit = "shirt";
      let shoes = "moccasins";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    } else {
      let outfit = "shirt";
      let shoes = "moccasins";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    }
  }

  if (degreesInCelsius > 18 && degreesInCelsius <= 24) {
    if (timeOfDay === "Morning") {
      let outfit = "shirt";
      let shoes = "moccasins";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    } else if (timeOfDay === "Afternoon") {
      let outfit = "t-shirt";
      let shoes = "sandals";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    } else {
      let outfit = "shirt";
      let shoes = "moccasins";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    }
  }

  if (degreesInCelsius >= 25) {
    if (timeOfDay === "Morning") {
      let outfit = "t-shirt";
      let shoes = "sandals";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    } else if (timeOfDay === "Afternoon") {
      let outfit = "swimsuit";
      let shoes = "barefoot";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    } else {
      let outfit = "shirt";
      let shoes = "moccasins";
      console.log(
        "It's " +
          degreesInCelsius +
          " degrees, get your " +
          outfit +
          " and " +
          shoes
      );
    }
  }
}

summerClothes("16", "Morning");
summerClothes("22", "Evening");
summerClothes("25", "Afternoon");
