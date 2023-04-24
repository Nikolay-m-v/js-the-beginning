"use strict";

// По време на седмицата на Оскарите, градското кино пуска прожекции на някои от филмите, които са
// номинирани в категорията за "Най-добър филм". В таблицата са показани кои са филмите и каква е цената
// за прожекция спрямо залата, в която се прожектира филмът.
// Филм                normal      luxury      ultra luxury
// A Star Is Born       7.50 лв.    10.50 лв.    13.50 лв.
// Bohemian Rhapsody    7.35 лв.    9.45 лв.     12.75 лв
// Green Book           8.15 лв.    10.25 лв.    13.25 лв.
// The Favourite        8.75 лв.    11.55 лв.    13.95 лв.
// Напишете програма, която изчислява какъв е приходът от даден филм, като знаете в какъв тип зала се
// прожектира и колко човека са си купили билет за прожекцията

function oscars(input) {
  let movie = String(input[0]);
  let typeOfHall = String(input[1]);
  let ticketsBought = Number(input[2]);
  let pricePerTicket = 0;

  if (typeOfHall === "normal") {
    if (movie === "A Star Is Born") {
      pricePerTicket = 7.5;
    } else if (movie === "Bohemian Rhapsody") {
      pricePerTicket = 7.35;
    } else if (movie === "Green Book") {
      pricePerTicket = 8.15;
    } else if (movie === "The Favourite") {
      pricePerTicket = 8.75;
    }
  } else if (typeOfHall === "luxury") {
    if (movie === "A Star Is Born") {
      pricePerTicket = 10.5;
    } else if (movie === "Bohemian Rhapsody") {
      pricePerTicket = 9.45;
    } else if (movie === "Green Book") {
      pricePerTicket = 10.25;
    } else if (movie === "The Favourite") {
      pricePerTicket = 11.55;
    }
  } else {
    if (movie === "A Star Is Born") {
      pricePerTicket = 13.5;
    } else if (movie === "Bohemian Rhapsody") {
      pricePerTicket = 12.75;
    } else if (movie === "Green Book") {
      pricePerTicket = 13.25;
    } else if (movie === "The Favourite") {
      pricePerTicket = 13.95;
    }
  }
  let totalMoneyMade = pricePerTicket * ticketsBought;
  console.log(movie + " -> " + totalMoneyMade.toFixed(2));
}

oscars(["A Star Is Born", "luxury", "42"]);
oscars(["Green Book", "normal", "63"]);
oscars(["The Favourite", "ultra luxury", "34"]);
