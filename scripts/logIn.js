"use strict";
function logInFunc() {
  const email = document.querySelector("input");
  const emailInput = email.value;

  const password = document.querySelectorAll("input")[1];
  const passInput = password.value;

  const output = document.querySelector("h3");

  const sign = document.getElementById("button");

  if (
    emailInput.endsWith("@gmail.com") ||
    emailInput.endsWith("@dawsoncollege.qc.ca")
  ) {
    if (passInput.length > 7) {
      output.innerText = "Success! Click the Dressd logo to return to home";
      sign.style.display = "none";
    } else {
      output.innerText = "Password must be 8 characters or more";
    }
  } else {
    output.innerText = "Please provide a valid email";
  }
}

const sign = document.getElementById("button");
console.log(sign);
sign.addEventListener("click", logInFunc);