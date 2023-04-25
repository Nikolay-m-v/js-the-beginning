"use strict";

function poolPipes(v, p1, p2, h) {
  let poolLitres = v;
  let pipeForHourlitres = p1;
  let secondPipeForHourlitres = p2;
  let hoursWorkerMissing = h;

  let pipeOneFill = pipeForHourlitres * hoursWorkerMissing;
  let pipeTwoFill = secondPipeForHourlitres * hoursWorkerMissing;
  let poolFilledIn = pipeOneFill + pipeTwoFill;
  let poolFilledInPercentage = poolFilledIn / 10;
  let bothPipesFill = pipeOneFill + pipeTwoFill;
  let pipeOnePercentage = (pipeOneFill / bothPipesFill) * 100;
  let pipeTwoPercentage = (pipeTwoFill / bothPipesFill) * 100;

  if (poolFilledIn > poolLitres) {
    bothPipesFill -= poolLitres;
    console.log(
      `For ${hoursWorkerMissing} hours the pool overflows with ${bothPipesFill.toFixed(
        2
      )} liters.`
    );
  } else {
    console.log(
      `The pool is ${poolFilledInPercentage.toFixed(
        2
      )}% full. Pipe 1: ${pipeOnePercentage.toFixed(
        2
      )}%. Pipe 2: ${pipeTwoPercentage.toFixed(2)}%`
    );
  }
}

poolPipes(1000, 100, 120, 3);
poolPipes(100, 100, 100, 2.5);
