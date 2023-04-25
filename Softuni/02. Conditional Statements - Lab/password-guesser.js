"use strict";

function passwordGuesser(input) {
  let actualPassword = "s3cr3t!P@ssw0rd";
  let passwordAttempt = input[0];
  if (passwordAttempt === actualPassword) {
    console.log("Welcome");
  } else {
    console.log("Wrong Password!");
  }
}

passwordGuesser(["qwery"]);
