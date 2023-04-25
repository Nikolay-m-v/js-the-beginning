"use strict";

function weather(input) {
  let weather = input[0];
  if (weather === "sunny") {
    console.log("its warm outside!");
  }
}

weather(["sunny"]);
weather(["cloudy"]);
weather(["snowy"]);
