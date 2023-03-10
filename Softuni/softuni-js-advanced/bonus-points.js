// Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по правилата, описани по-долу. Да се напише функция, която пресмята бонус точките, които получава числото и общия брой точки (числото + бонуса).
// Ако числото е до 100 включително, бонус точките са 5.
// Ако числото е по-голямо от 100, бонус точките са 20% от числото.
// Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

// Допълнителни бонус точки (начисляват се отделно от предходните):
// За четно число  + 1 т.
// За число, което завършва на 5  + 2 т.

function bonusPoints(params) {
  let points = Number(params[0]);
  let bonusPoints = 0.0;

  if (points <= 100) {
    bonusPoints = 5;
  } else if (points > 1000) {
    bonusPoints = points * 0.1;
  } else {
    bonusPoints = points * 0.2;
  }

  if (points % 2 == 0) {
    bonusPoints++;
  } else if (points % 10 == 5) {
    bonusPoints += 2;
  }

  let totalPoints = points + bonusPoints;

  console.log(bonusPoints);
  console.log(totalPoints);
}

// bonusPoints(["20"]);
// bonusPoints(["175"]);
// bonusPoints(["2703"]);
bonusPoints(["15875"]);
