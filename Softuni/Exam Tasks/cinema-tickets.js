"use strict";

function cinemaTickets(input) {
  let index = 0;
  let command = input[index++];
  let kidCounter = 0;
  let studentCounter = 0;
  let standardCounter = 0;

  while (command !== "Finish") {
    let currentMovie = command;
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
    let percentageSeatsFull = (soldTickets / emptySeats) * 100;
    console.log(currentMovie + " - " + percentageSeatsFull.toFixed(2) + "%");
    command = input[index++];
  }
  let totalTicketsBought = kidCounter + standardCounter + studentCounter;
  console.log("Total tickets: " + totalTicketsBought);
  let percentageStudentTickets = (studentCounter / totalTicketsBought) * 100;
  let percentageStandardTickets = (standardCounter / totalTicketsBought) * 100;
  let percentageKidTickets = (kidCounter / totalTicketsBought) * 100;
  console.log(percentageStudentTickets.toFixed(2) + "% student tickets");
  console.log(percentageStandardTickets.toFixed(2) + "% standard tickets");
  console.log(percentageKidTickets.toFixed(2) + "% kid tickets");
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
