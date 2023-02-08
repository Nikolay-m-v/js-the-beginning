// Напишете функция за конвертиране на щатски долари (USD) в български лева (BGN). Използвайте фиксиран курс между долар и лев: 1 USD = 1.79549 BGN.

function convertor(input) {
  let usd = parseInt(input[0]);
  let bgn = usd * 1.79549;
  console.log("The USD amount you have converted is equal to " + bgn + " BGN");
}

convertor(["22"]);
