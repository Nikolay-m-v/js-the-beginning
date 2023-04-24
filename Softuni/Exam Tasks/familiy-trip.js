"use strict";

// Семейство Иванови планират семейната си почивка. Вашата задача е да напишете програма, която да
// изчислява дали предвидения от тях бюджет ще им стигне, като знаете колко нощувки са планирали, каква е
// цената за нощувка и колко процента от бюджета са предвидили за допълнителни разходи. Трябва да се има
// предвид, че ако броят на нощувките е по-голям от 7, цената за нощувка се намаля с 5%.

function familiyTrip(input) {
  let budget = Number(input[0]);
  let nightsStayingIn = Number(input[1]);
  let pricePerNight = Number(input[2]);
  let percentageAdditionalCost = Number(input[3]);
  let totalCost = 0;

  if (nightsStayingIn > 7) {
    pricePerNight = pricePerNight * 0.95;
  }

  let totalCostForStayingIn = pricePerNight * nightsStayingIn;
  let additionalSpendings = (percentageAdditionalCost / 100) * budget;
  totalCost = totalCostForStayingIn + additionalSpendings;
  let moneyLeftOrNeeded = budget - totalCost;

  if (budget >= totalCost) {
    console.log(
      "Ivanovi will be left with " +
        moneyLeftOrNeeded.toFixed(2) +
        " leva after vacation."
    );
  } else {
    moneyLeftOrNeeded = Math.abs(moneyLeftOrNeeded);
    console.log(moneyLeftOrNeeded.toFixed(2) + " leva needed.");
  }
}

familiyTrip([800.5, 8, 100, 2]);
familiyTrip([500, 7, 66, 15]);
