"use strict";
function checkLength() {
  const nicknameInput = document.querySelector("input");
  const nickname = nicknameInput.value;

  const countryInput = document.querySelectorAll("input")[1];
  const country = countryInput.value;
  const greeting = document.querySelector("textarea");
  const greetingText = greeting.value;

  const output = document.querySelector("h3");

  if (greetingText.length < 20) {
    output.innerText = "You could say more!";
  } else {
    output.innerText = "Thank you " + nickname + " from " + country + "!";
  }
}
function changePageToWhite() {
  const button = document.getElementById("button");

  if (button.innerText === "Disable off-white background(experimantal!)") {
    document.body.style.backgroundColor = "white";
    button.innerText = "Enable off-white background(experimantal!)";
  } else {
    document.body.style.backgroundColor = "#fafae8";
    button.innerText = "Disable off-white background(experimantal!)";
  }
}
function handleKey(e) {
  if (e.key === "Enter") {
    checkLength();
  }
}

const background = document.getElementById("button");
background.addEventListener("click", changePageToWhite);

const signButton = document.querySelector(".button");
signButton.addEventListener("click", checkLength);

document.addEventListener("keydown", handleKey);