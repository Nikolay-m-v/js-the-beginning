"use strict";

// A bus is transporting football players. The bus has 2 columns of seats. Each row has 4 seats. The whole bus is filled. Write a program which outputs on which seat number a particular player is sitting. After that output which player number sits next to him.

const playersAndSeats = [
  [9, 18, 28, 34],
  [8, 12, 15, 18],
  [11, 13, 22, 25],
  [6, 4, 14, 27],
];

function findSeatWherePlayerSits(playerNumber, seats) {
  let seatNumber = 0;
  let currentPlayer = 0;
  let currentSeat = 0;

  for (let i = 0; i < seats.length; i++) {
    let row = seats[i];

    for (let j = 0; j < row.length; j++) {
      if (currentPlayer === playerNumber) {
        currentSeat = seatNumber;
        break;
      }
      currentPlayer = row[j];
      seatNumber++;
    }
  }
  console.log("Player " + playerNumber + " sits on: " + seatNumber + " seat");
  // console.log("Player 22 sits next to " + leftSidePlayer);
}

const seatNumber = findSeatWherePlayerSits(22, playersAndSeats); // 11

// const playersAndSeats = [
//   [9, 18, 36, 72, 28, 34],
//   [8, 12, 99, 81, 15, 18],
//   [11, 13, 43, 21, 22, 25],
//   [6, 4, 7, 29, 14, 27],
// ];
