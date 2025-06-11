"use strict";

//variables to store the price of each product
let priceP1;
let priceP2;
let priceP3;
setPrices();

//This variable needs to be outside the function in order for the code to work
const totalPrice = document.getElementById("totalPrice");
updateTotal();

//Updates the total price if any item gets removed
function updateTotal() {
  if (totalPrice !== undefined) {
    totalPrice.innerText = priceP1 + priceP2 + priceP3 + "$";
  }
}

//Selectors for elements in the page with event listeners
const image1 = document.querySelector("section img");
const image2 = document.querySelectorAll("img")[2];
const image3 = document.querySelectorAll("img")[3];
const sectionButton1 = document.querySelectorAll(".sectionButtons")[0];
const sectionButton2 = document.querySelectorAll(".sectionButtons")[1];
const sectionButton3 = document.querySelectorAll(".sectionButtons")[2];
const checkoutButton = document.getElementById("checkout");

//All the functions used in the page

//Changes the picture when the the mouse hovers the element
function changePicture(e) {
  const hoveredImage = e.target;
  const hoveredImageSource = hoveredImage.getAttribute("src");
  if (
    hoveredImageSource ===
    "assets/Pants1.jpg"
  ) {
    hoveredImage.setAttribute(
      "src",
      "assets/Pants2.jpg"
    );
  } else if (
    hoveredImageSource ===
    "assets/Shirt1.jpg"
  ) {
    hoveredImage.setAttribute(
      "src",
      "assets/Shirt2.jpg"
    );
  } else if (
    hoveredImageSource ===
    "assets/Coat1.jpg"
  ) {
    hoveredImage.setAttribute(
      "src",
      "assets/Coat2.jpg"
    );
  }
}
//Reverts the picture when the the mouse is no longer over the element
function revertPicture(e) {
  const unhoveredImage = e.target;
  const unhoveredImageSource = unhoveredImage.getAttribute("src");
  if (
    unhoveredImageSource ===
    "assets/Pants2.jpg"
  ) {
    unhoveredImage.setAttribute(
      "src",
      "assets/Pants1.jpg"
    );
  } else if (
    unhoveredImageSource ===
    "assets/Shirt2.jpg"
  ) {
    unhoveredImage.setAttribute(
      "src",
      "assets/Shirt1.jpg"
    );
  } else if (
    unhoveredImageSource ===
    "assets/Coat2.jpg"
  ) {
    unhoveredImage.setAttribute(
      "src",
      "assets/Coat1.jpg"
    );
  }
}

//Makes the section corresponding to the product invisible,
//makes the price of the element at the bottom invisible and updates total price
function removeFromCart(e) {
  if (e.target.getAttribute("id") === "rmCart1") {
    const parentSection = document.getElementById("Product1");
    const price = document.getElementById("p1");
    const sizeSelector1 = document.getElementById("Size-select");
    sizeSelector1.value = "S";
    parentSection.style.display = "none";
    price.style.display = "none";
    priceP1 = 0;
    updateTotal();
  }
  if (e.target.getAttribute("id") === "rmCart2") {
    const parentSection = document.getElementById("Product2");
    const price = document.getElementById("p2");
    const sizeSelector2 = document.getElementById("Size-select2");
    sizeSelector2.value = "S";
    parentSection.style.display = "none";
    price.style.display = "none";
    priceP2 = 0;
    updateTotal();
  }
  if (e.target.getAttribute("id") === "rmCart3") {
    const parentSection = document.getElementById("Product3");
    const price = document.getElementById("p3");
    const sizeSelector3 = document.getElementById("Size-select3");
    sizeSelector3.value = "S";
    parentSection.style.display = "none";
    price.style.display = "none";
    priceP3 = 0;
    updateTotal();
  }
}
// Checks if the section that are visible have a size selected.
// If yes change the total Price color and display a message
//If not display another message to ask the user to select a size
function checkout() {
  const sizeSelector1 = document.getElementById("Size-select");
  let sizeSelector1Value = "temp";
  if (sizeSelector1 !== null) {
    sizeSelector1Value = sizeSelector1.value;
  }
  const sizeSelector2 = document.getElementById("Size-select2");
  let sizeSelector2Value = "temp";
  if (sizeSelector2 !== null) {
    sizeSelector2Value = sizeSelector2.value;
  }
  const sizeSelector3 = document.getElementById("Size-select3");
  let sizeSelector3Value = "temp";
  if (sizeSelector3 !== null) {
    sizeSelector3Value = sizeSelector3.value;
  }
  const checkoutMessage = document.getElementById("checkoutMessage");

  if (
    sizeSelector1Value !== "" &&
    sizeSelector2Value !== "" &&
    sizeSelector3Value !== ""
  ) {
    const totalPrice = document.getElementById("totalPrice");
    totalPrice.style.color = "green";
    checkoutMessage.innerText = "Thank you for choosing us!";
  } else {
    checkoutMessage.innerText = "Please choose a size for each product";
  }
}

//Initially setes the prices of element when the page is loaded for the first time
function setPrices() {
  if (document.getElementById("Product1") === null) {
    priceP1 = 0;
  } else {
    priceP1 = 79.99;
  }

  if (document.getElementById("Product2") === null) {
    priceP2 = 0;
  } else {
    priceP2 = 59.99;
  }

  if (document.getElementById("Product3") === null) {
    priceP3 = 0;
  } else {
    priceP3 = 129.99;
  }
}

// code for the Suggestions part
const sendButton = document.querySelector("div fieldset button");

function validateEmail() {
  const email = document.getElementById("email");
  const emailValue = email.value;
  console.log(emailValue);
  const h3Element = document.querySelector("h3");
  const textArea = document.querySelector("textarea");
  const name = document.querySelector("div fieldset input");
  const nameValue = name.value;

  if (emailValue.endsWith("@dawsoncollege.qc.ca")) {
    h3Element.innerText =
      "Thank you " + nameValue + " for suggesting " + textArea.value;
  } else {
    h3Element.innerText = "Suggestions from Dawsonites only!";
  }
}

//Event listeners

if (image1 !== undefined) {
  image1.addEventListener("mouseover", changePicture);
  image1.addEventListener("mouseout", revertPicture);
}
if (image2 !== undefined) {
  image2.addEventListener("mouseover", changePicture);
  image2.addEventListener("mouseout", revertPicture);
}
if (image3 !== undefined) {
  image3.addEventListener("mouseover", changePicture);
  image3.addEventListener("mouseout", revertPicture);
}

if (sectionButton1 !== undefined) {
  sectionButton1.addEventListener("click", removeFromCart);
}
if (sectionButton2 !== undefined) {
  sectionButton2.addEventListener("click", removeFromCart);
}
if (sectionButton3 !== undefined) {
  sectionButton3.addEventListener("click", removeFromCart);
}
if (checkoutButton !== undefined) {
  checkoutButton.addEventListener("click", checkout);
}

sendButton.addEventListener("click", validateEmail);

