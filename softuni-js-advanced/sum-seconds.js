// Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35").

function sumSeconds(params) {
  let firstCompetitor = Number(params[0]);
  let secondCompetitor = Number(params[1]);
  let thirdCompetitor = Number(params[2]);

  let totalSum = firstCompetitor + secondCompetitor + thirdCompetitor;
  let remainder = totalSum % 60;
  let minutes = (totalSum - remainder) / 60;

  console.log(totalSum);
  console.log(remainder);
  console.log(minutes);

  if (remainder < 10) {
    remainder = "0" + remainder;
  }

  console.log(minutes + ":" + remainder);
}

// sumSeconds(["35", "45", "44"]);
// sumSeconds(["22", "7", "34"])
// sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
