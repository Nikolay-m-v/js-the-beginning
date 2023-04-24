"use strict";

// Напишете функция, която получава  две цели числа (N1 и N2) и оператор, с който да се извърши дадена математическа операция с тях.
// Възможните операции са: Събиране(+), Изваждане(-), Умножение(*), Деление(/) и Модулно деление(%).
// При събиране, изваждане и умножение на конзолата трябва да се отпечатат резултата и дали той е четен или нечетен.
// При обикновеното деление – резултата. При модулното деление – остатъка.
// Трябва да се има предвид, че делителят може да е равен на 0(нула), а на нула не се дели.
// В този случай трябва да се отпечата специално съобщениe.

function numbersAndOperators(params) {
  let numberOne = Number(params[0]);
  let numberTwo = Number(params[1]);
  let operator = String(params[2]);
  let sum = 0;

  if (operator == "+") {
    sum = numberOne + numberTwo;
    if (sum % 2 === 0) {
      console.log(sum + " even");
    } else {
      console.log(sum + "odd");
    }
  } else if (operator == "-") {
    sum = numberOne - numberTwo;
    if (sum % 2 === 0) {
      console.log(sum + " even");
    } else {
      console.log(sum + " odd");
    }
  } else if (operator == "*") {
    sum = numberOne * numberTwo;
    if (sum % 2 === 0) {
      console.log(sum + " even");
    } else {
      console.log(sum + " odd");
    }
  } else if (operator == "/") {
    sum = numberOne / numberTwo;
    if (numberTwo === 0) {
      console.log("Cannot divide " + numberOne + " by " + numberTwo);
    } else {
      console.log(sum.toFixed(2));
    }
  } else {
    let remainder = numberOne % numberTwo;
    if (numberTwo === 0) {
      console.log("Cannot divide " + numberOne + " by " + numberTwo);
    } else {
      console.log(remainder);
    }
  }
}

numbersAndOperators(["10", "12", "+"]);
numbersAndOperators(["10", "1", "-"]);
numbersAndOperators(["7", "3", "*"]);
numbersAndOperators(["15", "3", "/"]);
numbersAndOperators(["10", "3", "%"]);
numbersAndOperators(["112", "0", "/"]);
numbersAndOperators(["10", "0", "%"]);
numbersAndOperators(["123", "12", "/"]);
