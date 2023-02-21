"use strict";

// Атанас решава да прекара отпуската си в Банско и да кара ски.
// Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя.
// Налични са следните видове помещения, със следните цени за престой:
//"room for one person" – 18.00 лв за нощувка
// "apartment" – 25.00 лв за нощувка
// "president apartment" – 35.00 лв за нощувка
//вид помещение
// room for one person
// по-малко от 10 дни
// не ползва намаление
// между 10 и 15 дни
// не ползва намаление
// повече от 15 дни
// не ползва намаление
// apartment
// 30% от крайната цена
// 35% от крайната цена
// 50% от крайната цена
// president apartment
// 10% от крайната цена
// 15% от крайната цена
// 20% от крайната цена
// След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) .
// Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.

function skyVacation(params) {
  let daysStayingIn = Number(params[0]);
  let typeOfResidence = String(params[1]);
  let evaluation = String(params[2]);
  let pricePerNightForRoomForOnePerson = 18;
  let pricePerNightForApartment = 25;
  let pricePerNightForPresidentApartment = 35;
  let nightsStayingIn = daysStayingIn - 1;
  let totalSpent = 0;

  if (typeOfResidence === "apartment") {
    totalSpent = nightsStayingIn * pricePerNightForApartment;
    if (nightsStayingIn < 10) {
      totalSpent -= totalSpent * 0.3;
    } else if (nightsStayingIn > 10 && nightsStayingIn < 15) {
      totalSpent -= totalSpent * 0.35;
    } else {
      totalSpent -= totalSpent * 0.5;
    }
  } else if (typeOfResidence === "president apartment") {
    totalSpent = nightsStayingIn * pricePerNightForPresidentApartment;
    if (nightsStayingIn < 10) {
      totalSpent -= totalSpent * 0.1;
    } else if (nightsStayingIn > 10 && nightsStayingIn < 15) {
      totalSpent -= totalSpent * 0.15;
    } else {
      totalSpent -= totalSpent * 0.2;
    }
  } else {
    totalSpent = nightsStayingIn * pricePerNightForRoomForOnePerson;
  }

  if (evaluation === "positive") {
    totalSpent += totalSpent * 0.25;
  } else {
    totalSpent -= totalSpent * 0.1;
  }

  console.log(totalSpent.toFixed(2));
}

skyVacation(["14", "apartment", "positive"]);
skyVacation(["30", "president apartment", "negative"]);
