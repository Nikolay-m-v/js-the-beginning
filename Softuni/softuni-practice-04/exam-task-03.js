"use strict";

// Шеф на компания забелязва че все повече служители прекарват  време в сайтове, които ги разсейват.
// За да предотврати това, той въвежда изненадващи проверки на отворените табове на браузъра на служителите си.
// Според отворения сайт в таба се налагат следните глоби:
// "Facebook" -> 150 лв.
// "Instagram" -> 100 лв.
// "Reddit" -> 50 лв.

function salary(input) {
  let amountOfOpenTabs = Number(input[0]);
  let salary = Number(input[1]);
  let facebookTax = 150;
  let instagramTax = 100;
  let redditTax = 50;

  for (let i = 1; i <= input.length; i++) {
    let currentWebsiteOpen = input[i];
    if (currentWebsiteOpen === "Facebook") {
      salary -= facebookTax;
    } else if (currentWebsiteOpen === "Instagram") {
      salary -= instagramTax;
    } else if (currentWebsiteOpen === "Reddit") {
      salary -= redditTax;
    }
    if (salary <= 0) {
      console.log("You have lost your salary");
      break;
    }
  }
  if (salary > 0) {
    console.log(salary);
  }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
