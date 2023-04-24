// Джеси решава, че иска да се занимава с баскетбол, но за да тренира е нужна екипировка. Напишете програма, която изчислява какви разходи ще има Джеси, ако започне да тренира, като знаете колко е таксата за тренировки по баскетбол за период от 1 година. Нужна екипировка:
// Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function basketballEquipment(annualTax) {
  let priceForSneakers = annualTax - annualTax * 0.4;
  let priceForClothes = priceForSneakers - priceForSneakers * 0.2;
  let priceForBall = priceForClothes - priceForClothes * 0.75;
  let accesories = priceForBall - priceForBall * 0.8;
  let totalCost =
    annualTax + priceForSneakers + priceForClothes + priceForBall + accesories;

  console.log(
    "The price of the basketball clothes is 20% less of that of the shoes which in this case is 219 so 20% less of that is " +
      priceForClothes +
      " usd"
  );
  console.log(
    "The price of the ball is 1/4th or 25% of the clothes which in this case is 175.20 so 1/4 or 25% of that is " +
      priceForBall +
      " usd"
  );
  console.log(
    "The price of the accesories is 1/5 or 20% of the ball which in this case is 43.80 so 1/5 or 20% is " +
      accesories +
      " usd"
  );
  console.log(
    "The price of the sneakers is 60% of the annual tax which in this case is 365 so 60% of that is " +
      priceForSneakers +
      " usd"
  );
  console.log(
    "The total cost for Jessy to start training Basketball will be " + totalCost
  ) + " usd";
}

basketballEquipment(550);
