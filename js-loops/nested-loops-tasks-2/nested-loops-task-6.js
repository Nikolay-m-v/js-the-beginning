"use strict";

// Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети:
//  студентски(student), стандартен(standard) и детски(kid), за всички прожекции.
// Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.
// Входът е поредица от цели числа и текст:
// На първия ред до получаване на командата "Finish" - име на филма – текст
// На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
// За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
// Типа на закупения билет - текст ("student", "standard", "kid")

function cinemaTickets(input) {
  let index = 0;
  let command = input[index++];
  let studentCounter = 0;
  let kidCounter = 0;
  let standardCounter = 0;

  while (command !== "Finish") {
    let movieName = command;
    let emptySeats = Number(input[index++]);
    let newCommand = input[index++];
    let soldTickets = 0;
    while (newCommand !== "End") {
      let ticketType = newCommand;
      soldTickets++;
      if (ticketType === "standard") {
        standardCounter++;
      } else if (ticketType === "kid") {
        kidCounter++;
      } else if (ticketType === "student") {
        studentCounter++;
      }
      if (soldTickets === emptySeats) {
        break;
      }
      newCommand = input[index++];
    }
    let fullness = (soldTickets / emptySeats) * 100;
    console.log(`${movieName} - ${fullness.toFixed(2)}% full.`);
    command = input[index++];
  }
  let totalTickets = standardCounter + kidCounter + studentCounter;
  let percentageStandartTickets = (standardCounter / totalTickets) * 100;
  let percentageStudentTickets = (studentCounter / totalTickets) * 100;
  let percentageKidTickets = (kidCounter / totalTickets) * 100;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${percentageStandartTickets.toFixed(2)}% standard tickets`);
  console.log(`${percentageStudentTickets.toFixed(2)}% student tickets`);
  console.log(`${percentageKidTickets.toFixed(2)}% kid tickets`);
}

cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);

cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
