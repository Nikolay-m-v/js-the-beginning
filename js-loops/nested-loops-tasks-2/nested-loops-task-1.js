// Напишете функция, която получава цяло число n и отпечатва пирамида от числа, като в примерите:

function numberPyramid(n) {
  let current = 1;
  let isBigger = false;
  let currentLine = "";

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      currentLine += current + " ";
      current++;
    }
    console.log(currentLine);
    currentLine = "";
    if (isBigger) {
      break;
    }
  }
}

numberPyramid([7]);
numberPyramid([15]);
numberPyramid([24]);

// let current = 1;
// let isBigger = false;
// let printCurrentLine = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; n <= i; j++) {
//     if (current > n) {
//       isBigger = true;
//       break;
//     }
//     printCurrentLine += current + " ";
//     current++;
//   }
//   console.log(printCurrentLine);
//   printCurrentLine = "";
//   if (isBigger) {
//     break;
//   }
// }
