// Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след  15 минути.
// Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59.
// Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.

function time(params) {
  let hourInput = Number(params[0]);
  let minutesInput = Number(params[1]);
  let minutesToAdd = 15;

  let minutes = minutesInput + minutesToAdd;
  let minutesFormatted = minutes;

  if (minutes > 59) {
    hourInput++;
    minutes = minutes % 60;
  }

  if (minutes < 10) {
    minutesFormatted = "0" + minutes;
  }

  if (hourInput > 23) {
    hourInput = 0;
  }

  console.log(hourInput + ":" + minutesFormatted);
}

// time(["1", "46"]);
// time(["0", "01"]);
// time(["23", "59"]);
// time(["23", "19"]);
// time(["12", "49"]);
// time(["0", "0"]);
time(["1", "45"]);
