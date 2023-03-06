"use strict";

// Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване.
// Според размера на групата, катерачите ще изкачват различни върхове.
// Група до 5 човека – изкачват Мусала
// Група от 6 до 12 човека – изкачват Монблан
// Група от 13 до 25 човека – изкачват Килиманджаро
// Група от 26 до 40 човека –  изкачват К2
// Група от 41 или повече човека – изкачват Еверест
// Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.

function climbing(input) {
  let climbingMusala = 0;
  let climbingMonblan = 0;
  let climbingKilimandzharo = 0;
  let climbingK2 = 0;
  let climbingEverest = 0;
  let totalAmountOfPeople = 0;

  for (let i = 1; i < input.length; i++) {
    let amountOfPeopleInCurrentGroup = Number(input[i]);
    totalAmountOfPeople += amountOfPeopleInCurrentGroup;
    if (amountOfPeopleInCurrentGroup <= 5) {
      climbingMusala += amountOfPeopleInCurrentGroup;
    } else if (
      amountOfPeopleInCurrentGroup > 5 &&
      amountOfPeopleInCurrentGroup < 13
    ) {
      climbingMonblan += amountOfPeopleInCurrentGroup;
    } else if (
      amountOfPeopleInCurrentGroup > 12 &&
      amountOfPeopleInCurrentGroup < 26
    ) {
      climbingKilimandzharo += amountOfPeopleInCurrentGroup;
    } else if (
      amountOfPeopleInCurrentGroup > 25 &&
      amountOfPeopleInCurrentGroup < 41
    ) {
      climbingK2 += amountOfPeopleInCurrentGroup;
    } else {
      climbingEverest += amountOfPeopleInCurrentGroup;
    }
  }

  let percentageClimbingMusala = (climbingMusala / totalAmountOfPeople) * 100;
  let percentageClimbingMonblan = (climbingMonblan / totalAmountOfPeople) * 100;
  let percentageClimbingKilimandzharo =
    (climbingKilimandzharo / totalAmountOfPeople) * 100;
  let percentageClimbingK2 = (climbingK2 / totalAmountOfPeople) * 100;
  let percentageClimbingEverest = (climbingEverest / totalAmountOfPeople) * 100;

  console.log("total amount of people climbing: " + totalAmountOfPeople);
  console.log(
    "percentage of people climbing Musala: " +
      percentageClimbingMusala.toFixed(2) +
      "%"
  );
  console.log(
    "percentage of people climbing Monblan: " +
      percentageClimbingMonblan.toFixed(2) +
      "%"
  );
  console.log(
    "percentage of people climbing Kilimandzharo: " +
      percentageClimbingKilimandzharo.toFixed(2) +
      "%"
  );
  console.log(
    "percentage of people climbing K2: " + percentageClimbingK2.toFixed(2) + "%"
  );
  console.log(
    "percentage of people climbing Everest: " +
      percentageClimbingEverest.toFixed(2) +
      "%"
  );
}

climbing(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
climbing(["5", "25", "41", "31", "250", "6"]);
