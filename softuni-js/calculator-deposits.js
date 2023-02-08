// Напишете програма, която изчислява каква сума ще получите в края на депозитния период при определен лихвен процент. Използвайте следната формула:
// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

function calculateSum(params) {
  let depositedSum = Number(params[0]);
  let lengthOfDeposit = Number(params[1]);
  let annualInterestRate = Number(params[2]);

  let interest = depositedSum * (annualInterestRate / 100);
  let monthlyInterest = interest / 12;

  let totalSum = depositedSum + lengthOfDeposit * monthlyInterest;

  console.log(
    "The amount you will receive at the end with the added interest rate is " +
      totalSum
  );
}

calculateSum(["200", "6", "5.7"]);
