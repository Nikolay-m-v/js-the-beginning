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
  let destination = input[index++];
  let minimumBudgetRequired = Number(input[index++]);
  let savings = Number(input[index++]);

  for (let i = 2; i < input.length; i++) {
    savings += Number(input[index]);
    if (input[index++] === "Spain") {
      destination = String(input[index]);
      savings = 0;
      for (let i = 8; i < input.length; i++) {
        minimumBudgetRequired = Number(input[index]);
        savings += Number(input[index++]);
        console.log(savings);
      }
    }
  }
  if (savings >= minimumBudgetRequired) {
    console.log("Going to greece!");
  }

  console.log(destination);
  console.log(minimumBudgetRequired);
  console.log(savings);
}

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
