// За рождения си ден Любомир получил аквариум с формата на паралелепипед. Първоначално прочитаме от конзолата на отделни редове размерите му – дължина, широчина и височина в сантиметри. Трябва да се пресметне колко литра вода ще събира аквариума, ако се знае, че определен процент от вместимостта му е заета от пясък, растения, нагревател и помпа.
// Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/.
// Да се напише програма, която изчислява литрите вода, която са необходими за напълването на аквариума

function aquarium(params) {
  let length = Number(params[0]);
  let width = Number(params[1]);
  let height = Number(params[2]);
  let percentages = Number(params[3]);

  let aquariumVolume = length * width * height;
  let aquariumSizeInLiters = aquariumVolume / 1000;
  let occupiedSpaceInPercentages = percentages / 100;
  let litersRequired = aquariumSizeInLiters * (1 - occupiedSpaceInPercentages);

  console.log(
    "The aquarium size in cubical meters is equal to its  length multiplied by its width multiplied by its height which is " +
      aquariumVolume +
      " cubical meters"
  );
  console.log(
    "The aquarium size in liters is equal to its cubical meters size  multiplied by 0.001 which is " +
      aquariumSizeInLiters +
      " liters"
  );
  console.log(
    "The occupied space from the sand, pump, heater and plants is 17% which then is divided by 100 to return " +
      occupiedSpaceInPercentages
  );
  console.log(
    "The amount of liters required to fill the aquarium is equal to the total liters (299.625) - the occupied space(17%) which is " +
      litersRequired
  );
}

aquarium(["85", "75", "47", "17"]);
