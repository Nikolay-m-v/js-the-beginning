"use strict";

// Курсът "Train the trainers" е към края си и финалното оценяване наближава.
// Вашата задача е да помогнете на журито,  което ще оценява презентациите, като напишете функция,
// която да изчислява средната оценка от представянето на всяка една презентация от даден студент, а накрая средният успех от всички тях.
// От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]
// След това името на презентацията - текст
// За всяка една презентация като нов елемент се чете n - на брой оценки - реално число в интервала [2.00…6.00]
// След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
//  "{името на презентацията} - {средна оценка}."
// След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}."
// и програмата приключва.
// Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.

function trainTheTrainers(input) {
  let index = 0;
  let people = Number(input[index++]);
  let command = input[index++];
  let sumGrade = 0;
  let counter = 0;

  while (command !== "Finish") {
    let presentation = command;
    let currengtGradeSum = 0;
    counter++;
    for (let i = 0; i < people; i++) {
      let grade = Number(input[index++]);
      currengtGradeSum += grade;
    }
    let averageGradePresentation = currengtGradeSum / people;
    sumGrade += averageGradePresentation;

    console.log(presentation + " - " + averageGradePresentation.toFixed(2));
    command = input[index++];
  }
  let average = sumGrade / counter;
  console.log("Student's final assessment is " + average.toFixed(2));
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
