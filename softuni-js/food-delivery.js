// Ресторант отваря врати и предлага няколко менюта на преференциални цени:
// Пилешко меню –  10.35 лв.
// Меню с риба – 12.40 лв.
// Вегетарианско меню  – 8.15 лв.
// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).
// Цената на доставка е 2.50 лв и се начислява най-накрая.

function restaurantMenu(params) {
  let chickenMenu = 10.35;
  let fishMenu = 12.4;
  let vegetarianMenu = 8.15;
  let deliveryPrice = 2.5;

  let chickenMenuOrdered = Number(params[0]);
  let fishMenuOrdered = Number(params[1]);
  let vegetarianMenuOrdered = Number(params[2]);

  let foodOrdered =
    chickenMenu * chickenMenuOrdered +
    fishMenu * fishMenuOrdered +
    vegetarianMenu * vegetarianMenuOrdered;
  let dessert = foodOrdered * 0.2;
  let totalCost = foodOrdered + dessert + deliveryPrice;

  console.log(
    "The price for the full amount of food ordered is " + foodOrdered
  ) + " usd";
  console.log("The price for dessert is " + dessert + " usd");
  console.log(
    "The total amount for food including dessert and delivery is " +
      totalCost +
      " usd"
  );
}

restaurantMenu(["2", "4", "3"]);
