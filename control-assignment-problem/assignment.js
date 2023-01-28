const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert("number is above 0.7");
}

const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let arrayTwo = ["mcdonalds", "burger", "duner", "chickenshacko"];

for (let a = arrayTwo.length - 1; a >= 0; a--) {
  console.log(arrayTwo[a]);
}

const randomNumberTwo = Math.random();

console.log(randomNumber);
console.log(randomNumberTwo);
if (
  (randomNumber >= 0.7 && randomNumberTwo >= 0.7) ||
  randomNumber <= 0.2 ||
  randomNumberTwo <= 0.2
) {
  alert("number is greaaater than 0.7 or smalle than 0.2");
}
