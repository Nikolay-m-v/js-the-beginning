"use strict";

function comission(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let comissionPercentage = 0;

  if (city !== "Sofia" && city !== "Varna" && city !== "Plovdiv") {
    console.log("Error unknown city");
    return;
  }
  if (sales < 0) {
    console.log("Error sales invalid number");
    return;
  }

  if (sales > 0 && sales < 500) {
    if (city === "Sofia") {
      comissionPercentage = 0.05;
    } else if (city === "Varna") {
      comissionPercentage = 0.045;
    } else if (city === "Plovdiv") {
      comissionPercentage = 0.055;
    }
  } else if (sales > 500 && sales < 1000) {
    if (city === "Sofia") {
      comissionPercentage = 0.07;
    } else if (city === "Varna") {
      comissionPercentage = 0.075;
    } else if (city === "Plovdiv") {
      comissionPercentage = 0.08;
    }
  } else if (sales > 1000 && sales < 10000) {
    if (city === "Sofia") {
      comissionPercentage = 0.08;
    } else if (city === "Varna") {
      comissionPercentage = 0.1;
    } else if (city === "Plovdiv") {
      comissionPercentage = 0.12;
    }
  } else if (sales > 10000) {
    if (city === "Sofia") {
      comissionPercentage = 0.12;
    } else if (city === "Varna") {
      comissionPercentage = 0.13;
    } else if (city === "Plovdiv") {
      comissionPercentage = 0.145;
    }
  }
  let comissionMade = sales * comissionPercentage;
  console.log(comissionMade.toFixed(2));
}

comission(["Sofia", "1500"]);
comission(["Plovdiv", "499.99"]);
comission(["Varna", "3874.50"]);
comission(["Kaspichan", "-50"]);
