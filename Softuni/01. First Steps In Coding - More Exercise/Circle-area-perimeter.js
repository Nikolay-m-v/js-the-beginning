"use strict";

function circleAreaPerimeter(radius) {
  let circleArea = Math.PI * radius * radius;
  let perimeter = 2 * Math.PI * radius;
  console.log(circleArea.toFixed(2));
  console.log(perimeter.toFixed(2));
}

circleAreaPerimeter(3);
