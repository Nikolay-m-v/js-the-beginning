"use strict";

// Напишете функция, която получава цяло число n, сумира всички негови цифри и отпечатва сумата.

function sumNumbers(input) {
  let n = Number(input[0]);
  let sum = 0;

  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  console.log(sum);
}

sumNumbers(["1234"]);
sumNumbers(["564891"]);

// function sumNumbers(input) {
//   let n = Number(input[0]);
//   let sum = 0;

//   for (let i = 0; i <= n; i++) {
//     sum += i;
//     if (n[i] === 1) {
//       sum += 1;
//     } else if (n[i] === 2) {
//       sum += 2;
//     } else if (n[i] === 3) {
//       sum += 3;
//     } else if (n[i] === 4) {
//       sum += 4;
//     } else if (n[i] === 5) {
//       sum += 5;
//     } else if (n[i] === 6) {
//       sum += 6;
//     } else if (n[i] === 7) {
//       sum += 7;
//     } else if (n[i] === 8) {
//       sum += 8;
//     } else if (n[i] === 9) {
//       sum += 9;
//     }
//   }
//   console.log(sum);
// }
