'use strict';

// Let

let clicks = 0;
let cps = 0;

let itemOnePrice = 10;
let itemTwoPrice = 100;
let itemThreePrice = 500;
let itemFourPrice = 2500;

let itemOneNumber = 0;
let itemTwoNumber = 0;
let itemThreeNumber = 0;
let itemFourNumber = 0;

// Const

const multiplier = 1.15;

const mainElement = document.getElementById('main-element');
const clickCount = document.getElementById('click-count');
const cpsCount = document.getElementById('cps-count');
const clickAnimation = document.getElementById('click-animation');

const heading1 = document.getElementById('heading-1');
const heading2 = document.getElementById('heading-2');
const heading3 = document.getElementById('heading-3');
const heading4 = document.getElementById('heading-4');

const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const number3 = document.getElementById('number-3');
const number4 = document.getElementById('number-4');

// Local Storage

populateUI();

function populateUI() {
  if (localStorage.getItem('savedClicks')) {
    clicks = JSON.parse(localStorage.getItem('savedClicks'));
  }

  if (localStorage.getItem('savedCPS')) {
    cps = JSON.parse(localStorage.getItem('savedCPS'));
  }

  if (localStorage.getItem('savedItemOne')) {
    itemOnePrice = JSON.parse(localStorage.getItem('savedItemOne'));
  }

  if (localStorage.getItem('savedItemTwo')) {
    itemTwoPrice = JSON.parse(localStorage.getItem('savedItemTwo'));
  }

  if (localStorage.getItem('savedItemThree')) {
    itemThreePrice = JSON.parse(localStorage.getItem('savedItemThree'));
  }

  if (localStorage.getItem('savedItemFour')) {
    itemFourPrice = JSON.parse(localStorage.getItem('savedItemFour'));
  }

  if (localStorage.getItem('savedNumberOne')) {
    itemOneNumber = JSON.parse(localStorage.getItem('savedNumberOne'));
  }

  if (localStorage.getItem('savedNumberTwo')) {
    itemTwoNumber = JSON.parse(localStorage.getItem('savedNumberTwo'));
  }

  if (localStorage.getItem('savedNumberThree')) {
    itemThreeNumber = JSON.parse(localStorage.getItem('savedNumberThree'));
  }

  if (localStorage.getItem('savedNumberFour')) {
    itemFourNumber = JSON.parse(localStorage.getItem('savedNumberFour'));
  }
}

const updateLocalStorage = setInterval(() => {
  updateStorage();
}, 100);

function updateStorage() {
  localStorage.setItem('savedClicks', JSON.stringify(clicks));
  localStorage.setItem('savedCPS', JSON.stringify(cps));
  localStorage.setItem('savedItemOne', JSON.stringify(itemOnePrice));
  localStorage.setItem('savedItemTwo', JSON.stringify(itemTwoPrice));
  localStorage.setItem('savedItemThree', JSON.stringify(itemThreePrice));
  localStorage.setItem('savedItemFour', JSON.stringify(itemFourPrice));
  localStorage.setItem('savedNumberOne', JSON.stringify(itemOneNumber));
  localStorage.setItem('savedNumberTwo', JSON.stringify(itemTwoNumber));
  localStorage.setItem('savedNumberThree', JSON.stringify(itemThreeNumber));
  localStorage.setItem('savedNumberFour', JSON.stringify(itemFourNumber));
}

// Intervals

const clicksPerSecond = setInterval(() => {
  clicks += cps;
}, 1000);

const updateGame = setInterval(() => {
  cpsCount.textContent = `Per Second: ${Math.round(cps * 10) / 10}`;

  clickCount.textContent = `Stoned Score: ${Math.floor(clicks)}`;

  heading1.textContent = `Cost: ${itemOnePrice} | +0.1 Sec`;
  heading2.textContent = `Cost: ${itemTwoPrice} | +1 Sec`;
  heading3.textContent = `Cost: ${itemThreePrice} | +5 Sec`;
  heading4.textContent = `Cost: ${itemFourPrice} | +15 Sec`;

  number1.textContent = `${itemOneNumber}`;
  number2.textContent = `${itemTwoNumber}`;
  number3.textContent = `${itemThreeNumber}`;
  number4.textContent = `${itemFourNumber}`;
}, 10);

// Functions

function clearGame() {
  clicks = 0;
  cps = 0;

  itemOnePrice = 10;
  itemTwoPrice = 100;
  itemThreePrice = 500;
  itemFourPrice = 2500;

  itemOneNumber = 0;
  itemTwoNumber = 0;
  itemThreeNumber = 0;
  itemFourNumber = 0;

  localStorage.clear();
}

function mainFunction() {
  clicks++;
  mainElement.classList.add('animate');
  clickAnimation.classList.remove('hidden');
  setTimeout(() => {
    mainElement.classList.remove('animate');
    clickAnimation.classList.add('hidden');
  }, 100);
}

function buyItemOne() {
  if (clicks >= itemOnePrice) {
    clicks -= itemOnePrice;
    cps += 0.1;
    itemOnePrice *= multiplier;
    itemOnePrice = Math.round(itemOnePrice);
    itemOneNumber++;
  }
}

function buyItemTwo() {
  if (clicks >= itemTwoPrice) {
    clicks -= itemTwoPrice;
    cps++;
    itemTwoPrice *= multiplier;
    itemTwoPrice = Math.round(itemTwoPrice);
    itemTwoNumber++;
  }
}

function buyItemThree() {
  if (clicks >= itemThreePrice) {
    clicks -= itemThreePrice;
    cps += 5;
    itemThreePrice *= multiplier;
    itemThreePrice = Math.round(itemThreePrice);
    itemThreeNumber++;
  }
}

function buyItemFour() {
  if (clicks >= itemFourPrice) {
    clicks -= itemFourPrice;
    cps += 15;
    itemFourPrice *= multiplier;
    itemFourPrice = Math.round(itemFourPrice);
    itemFourNumber++;
  }
}

// Event Listeners

mainElement.addEventListener('click', mainFunction);

item1.addEventListener('click', buyItemOne);
item2.addEventListener('click', buyItemTwo);
item3.addEventListener('click', buyItemThree);
item4.addEventListener('click', buyItemFour);

document.addEventListener('keydown', e => {
  if (e.key === ' ') {
    clearGame();
  }
});
