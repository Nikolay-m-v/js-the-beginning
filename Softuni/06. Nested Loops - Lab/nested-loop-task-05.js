"use strict";

// Ани обича да пътува и иска тази година да посети няколко различни дестинации.
// Като си избере дестинация, ще прецени колко пари ще й трябват, за да отиде до там и ще започне да спестява.
// Когато е спестила достатъчно, ще може да пътува.
// Функцията получава масив, като всеки път ще се четат първо дестинацията и минималния бюджет, който ще е нужен за пътуването.
// След това ще се четат няколко суми, които Ани спестява като работи и когато успее да събере достатъчно за пътуването, ще заминава,
// като на конзолата трябва да се изпише:
//  "Going to {дестинацията}!"
// Когато е посетила всички дестинации, които иска, вместо дестинация ще въведе "End" и програмата ще приключи.

function trip(input) {
  let index = 0;
  let destination = "";
  let command = input[index++];
  let target = 0;

  while (command !== "End") {
    destination = command;
    target = Number(input[index++]);
    let budget = 0;
    while (budget < target) {
      let savings = Number(input[index++]);
      budget += savings;
      if (budget >= target) {
        console.log("Going to " + destination + "!");
        break;
      }
      savings = input[index];
    }
    command = input[index++];
  }
}

// for (let i = 2; i < input.length; i++) {
//   savings += Number(input[index]);
//   if (input[index++] === "Spain") {
//     destination = String(input[index]);
//     savings = 0;
//     for (let i = 8; i < input.length; i++) {
//       minimumBudgetRequired = Number(input[index]);
//       savings += Number(input[index++]);
//       console.log(savings);
//     }
//   }
// }
// if (savings >= minimumBudgetRequired) {
//   console.log("Going to greece!");
// }

trip([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);

trip([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
