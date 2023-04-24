"use strict";

function projectCreation(input) {
  let hoursPerProject = 3;
  let projects = Number(input[1]);
  let totalTimeNeeded = hoursPerProject * projects;
  console.log(
    `The architect ${input[0]} will need ${totalTimeNeeded} hours to complete ${projects} project/s`
  );
}

projectCreation(["George", "4"]);
