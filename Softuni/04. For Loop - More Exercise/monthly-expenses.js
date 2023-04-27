"use strict";

function monthlyExpenses(input) {
  let months = input[0];
  let water = 20;
  let totalWater = 0;
  let internet = 15;
  let totalInternet = 0;
  let others = 0;
  let othersTotal = 0;
  let paidForMonth = 0;
  let electricity = 0;
  let totalElectricity = 0;

  for (let i = 1; i <= months; i++) {
    electricity = input[i];
    totalElectricity += electricity;
    totalWater += water;
    totalInternet += internet;
    others = (water + internet + electricity) * 1.2;
    othersTotal += others;
  }
  let total = totalElectricity + totalInternet + totalWater + othersTotal;
  let average = total / months;
  console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
  console.log(`Water: ${totalWater.toFixed(2)} lv`);
  console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
  console.log(`Others: ${othersTotal.toFixed(2)} lv`);
  console.log(`Average: ${average.toFixed(2)} lv`);
}

monthlyExpenses([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
