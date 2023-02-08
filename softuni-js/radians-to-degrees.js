// Напишете програма, която чете ъгъл в радиани (десетично число) и го преобразува в градуси. Използвайте формулата: градус = радиан * 180 / π. Числото π в Java програми е достъпно чрез Math.PI.

function radiansToDegrees(input) {
  let radians = parseInt(input[0]);
  let degrees = (radians * 180) / Math.PI;
  console.log(
    "The amount of radians you have converted using the number PI is equal to " +
      degrees
  );
}

radiansToDegrees(["3.1416"]);
