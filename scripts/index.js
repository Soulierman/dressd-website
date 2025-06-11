"use strict";
//variables to store the status of each Product
let Added1 = false;
let Added2 = false;
let Added3 = false;
updateCart();

//Updates the link of cart Page based on which boolean values are true or false
function updateCart() {
  const cartPageLink = document.querySelectorAll("a")[2];

  if (Added1 && Added2 && Added3) {
    cartPageLink.setAttribute("href", "cartPage1-2-3.html");
  } else if (Added1 && Added2) {
    cartPageLink.setAttribute("href", "cartPage1-2.html");
  } else if (Added1 && Added3) {
    cartPageLink.setAttribute("href", "cartPage1-3.html");
  } else if (Added2 && Added3) {
    cartPageLink.setAttribute("href", "cartPage2-3.html");
  } else if (Added1) {
    cartPageLink.setAttribute("href", "cartPage1.html");
  } else if (Added2) {
    cartPageLink.setAttribute("href", "cartPage2.html");
  } else if (Added3) {
    cartPageLink.setAttribute("href", "cartPage3.html");
  } else {
    cartPageLink.setAttribute("href", "cartPage0.html");
  }
  console.log(cartPageLink);
}

//Event handlers
//function taken from cartPage.js
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
//function taken from cartPage.js
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

//Changes the button that is displayed and updates the boolean value to true when clicked
//Updates cart at the end
function addToCart(e) {
  if (e.target.getAttribute("id") === "addCart1") {
    rmButton1.style.display = "inline-block";
    addButton1.style.display = "none";
    Added1 = true;
  } else if (e.target.getAttribute("id") === "addCart2") {
    rmButton2.style.display = "inline-block";
    addButton2.style.display = "none";
    Added2 = true;
  } else if (e.target.getAttribute("id") === "addCart3") {
    rmButton3.style.display = "inline-block";
    addButton3.style.display = "none";
    Added3 = true;
  }
  updateCart();
}
//Changes the button that is displayed and updates the boolean value to false when clicked
//Updates cart at the end
function removeFromCart(e) {
  if (e.target.getAttribute("id") === "rmCart1") {
    addButton1.style.display = "inline-block";
    rmButton1.style.display = "none";
    Added1 = false;
  } else if (e.target.getAttribute("id") === "rmCart2") {
    addButton2.style.display = "inline-block";
    rmButton2.style.display = "none";
    Added2 = false;
  } else if (e.target.getAttribute("id") === "rmCart3") {
    addButton3.style.display = "inline-block";
    rmButton3.style.display = "none";
    Added3 = false;
  }
  updateCart();
}
//Selectors for elements with event listeners
//Code taken from cartPage.js
const image1 = document.querySelector("section img");
const image2 = document.querySelectorAll("img")[2];
const image3 = document.querySelectorAll("img")[3];
const addButton1 = document.getElementById("addCart1");
const addButton2 = document.getElementById("addCart2");
const addButton3 = document.getElementById("addCart3");
const rmButton1 = document.getElementById("rmCart1");
const rmButton2 = document.getElementById("rmCart2");
const rmButton3 = document.getElementById("rmCart3");

//Event Listeners
image1.addEventListener("mouseover", changePicture);
image1.addEventListener("mouseout", revertPicture);
image2.addEventListener("mouseover", changePicture);
image2.addEventListener("mouseout", revertPicture);
image3.addEventListener("mouseover", changePicture);
image3.addEventListener("mouseout", revertPicture);

if(addButton1 !== null){
addButton1.addEventListener("click", addToCart);
addButton2.addEventListener("click", addToCart);
addButton3.addEventListener("click", addToCart);
rmButton1.addEventListener("click", removeFromCart);
rmButton2.addEventListener("click", removeFromCart);
rmButton3.addEventListener("click", removeFromCart);
}