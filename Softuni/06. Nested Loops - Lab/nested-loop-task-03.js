// Напишете функция, която изчислява колко решения в естествените числа (включително и нулата) има уравнението:
// x1 + x2 + x3 = n
// Числото n е цяло число и се въвежда от конзолата.

function combinations(input) {
  let number = Number(input[0]);
  let validCombinations = 0;

  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      for (let k = 0; k <= 99; k++) {
        if (i + j + k === number) {
          validCombinations++;
        }
      }
    }
  }
  console.log(validCombinations);
}

combinations([25]);
combinations([20]);
combinations([5]);
