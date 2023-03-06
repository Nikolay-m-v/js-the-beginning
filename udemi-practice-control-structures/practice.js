function numberZeroToOne(input) {
  let number = Math.random();
  if (number > 0.7) {
    console.log("greater than 0.7");
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
