"use strict";

// Когато пуснали билетите за Евро 2016, група запалянковци решили да си закупят. Билетите имат две категории с различни цени:
// VIP – 499.99 лева.
// Normal – 249.99 лева.
// Запалянковците имат определен бюджет, а броят на хората в групата определя какъв процент от бюджета трябва да се задели за транспоОт 1 до 4 – 75% от бюджета.
// От 5 до 9 – 60% от бюджета.
// От 10 до 24 – 50% от бюджета.
// От 25 до 49 – 40% от бюджета.
// 50 или повече – 25% от бюджета.
// Напишете програма, която да пресмята дали с останалите пари от бюджета могат да си купят билети за избраната категория. И колко пари ще им останат или ще са им нужни.

function ticketsForTheMatch(input) {
  let budget = Number(input[0]);
  let typeOfSeat = String(input[1]);
  let amountOfSeats = Number(input[2]);
  let pricePerSeat = 0;
  let moneyForTransport = 0;

  if (typeOfSeat === "VIP") {
    pricePerSeat = 499.99;
  } else {
    pricePerSeat = 249.99;
  }

  if (amountOfSeats <= 4) {
    moneyForTransport = budget * 0.75;
  } else if (amountOfSeats >= 5 && amountOfSeats <= 9) {
    moneyForTransport = budget * 0.6;
  } else if (amountOfSeats >= 10 && amountOfSeats <= 24) {
    moneyForTransport = budget * 0.5;
  } else if (amountOfSeats >= 25 && amountOfSeats <= 49) {
    moneyForTransport = budget * 0.4;
  } else {
    moneyForTransport = budget * 0.25;
  }

  let moneySpent = moneyForTransport + amountOfSeats * pricePerSeat;
  let moneyLeftOrNeeded = budget - moneySpent;
  let moneyLeftOrNeededFormatted = Math.abs(moneyLeftOrNeeded.toFixed(2));

  if (budget >= moneySpent) {
    console.log("Yes! You have " + moneyLeftOrNeededFormatted + " leva left");
  } else {
    console.log(
      "Not enough money ! You need " + moneyLeftOrNeededFormatted + " leva"
    );
  }
}

ticketsForTheMatch(["1000", "normal", "1"]);
// ticketsForTheMatch(["30000", "VIP", "49"]);
