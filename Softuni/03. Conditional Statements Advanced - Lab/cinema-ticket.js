"use strict";

function cinemaTicket(input) {
  let pricePerTicket = 0;
  let day = input[0];

  if (day === "Monday" || day === "Tuesday" || day === "Friday") {
    pricePerTicket = 12;
  } else if (day === "Wednesday" || day === "Thursday") {
    pricePerTicket = 14;
  } else if (day === "Saturday" || day === "Sunday") {
    pricePerTicket = 16;
  }
  console.log(pricePerTicket);
}

cinemaTicket(["Monday"]);
