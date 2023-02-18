function cinema(params) {
  let income = 0;
  let typeOfTicket = String(params[0]);
  let pricePerTicket = 0;
  let rows = Number(params[1]);
  let colons = Number(params[2]);

  if (typeOfTicket === "Premiere") {
    pricePerTicket = 12.0;
  } else if (type === "Normal") {
    pricePerTicket = 7.5;
  } else {
    pricePerTicket = 5.0;
  }

  income = rows * colons * pricePerTicket;

  let incomeFormatted = income.toFixed(2);

  console.log(incomeFormatted + " leva");
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
