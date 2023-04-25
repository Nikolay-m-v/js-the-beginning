"use strict";

function pets(input) {
  let days = input[0];
  let leftKgFood = input[1];
  let foodForDogPerDayKg = input[2];
  let foodForCatPerDayKg = input[3];
  let foodForTurtlePerDayGr = input[4];

  let turtleFoodInKg = foodForTurtlePerDayGr / 1000;
  let foodEatenByPets =
    foodForDogPerDayKg * days +
    foodForCatPerDayKg * days +
    turtleFoodInKg * days;
  let foodLeftOrNeeded = leftKgFood - foodEatenByPets;
  let foodLeftOrNeededAbs = Math.abs(foodLeftOrNeeded);
  if (foodEatenByPets < leftKgFood) {
    console.log(`${Math.floor(foodLeftOrNeededAbs)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(foodLeftOrNeededAbs)} kilos of food are needed.`);
  }
}

pets([2, 10, 1, 1, 1200]);
pets([5, 10, 2.1, 0.8, 321]);
