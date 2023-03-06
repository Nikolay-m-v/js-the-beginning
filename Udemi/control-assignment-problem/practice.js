function numberZeroToOne(input) {
  let number = Math.random();
  let numberTwo = Math.random();
  if (number > 0.7 && numberTwo > 0.7) {
    console.log("both are greater than 0.7");
  } else if (number < 0.2 || numberTwo < 0.2) {
    console.log("one of them is not greater than 0.2");
  }
}

numberZeroToOne();

function arrayNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }

  for (let i = 1; i >= 0; i--) {
    console.log(input[i]);
  }
}

arrayNumbers([11, 33]);
