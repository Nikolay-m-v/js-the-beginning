// За лятната ваканция в списъка със задължителна литература на Жоро има определен брой книги. Понеже Жоро предпочита да играе с приятели навън, вашата задача е да му помогнете да изчисли колко часа на ден трябва да отделя, за да прочете необходимата литература.

function bookRead(params) {
  let amountOfPages = Number(params[0]);
  let pagesPerHour = Number(params[1]);
  let DaysRequiredToFinishBook = Number(params[2]);

  let hoursNeededToFinishBook = amountOfPages / pagesPerHour;
  console.log(
    "Hours needed to Finish reading a book " + hoursNeededToFinishBook
  );
  let hoursPerDay = hoursNeededToFinishBook / DaysRequiredToFinishBook;
  console.log("The amount of hours you need to read per day " + hoursPerDay);
}

bookRead(["212", "20", "2"]);
