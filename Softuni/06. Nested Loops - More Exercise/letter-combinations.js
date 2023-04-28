function letterCombinations(input) {
  let startLetter = input[0];
  let endLetter = input[1];
  let skipLetter = input[2];
  let combinations = 0;

  for (let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++) {
    for (let j = startLetter.charCodeAt(0); j <= endLetter.charCodeAt(0); j++) {
      for (
        let k = startLetter.charCodeAt(0);
        k <= endLetter.charCodeAt(0);
        k++
      ) {
        let combination =
          String.fromCharCode(i) +
          String.fromCharCode(j) +
          String.fromCharCode(k);
        if (!combination.includes(skipLetter)) {
          console.log(combination);
          combinations++;
        }
      }
    }
  }
  console.log(combinations);
}

letterCombinations(["a", "c", "b"]);
