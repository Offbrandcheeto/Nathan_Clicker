'use strict';

// Let

let clicks = 0;
let cps = 0;

let itemOnePrice = 10;
let itemTwoPrice = 100;
let itemThreePrice = 500;
let itemFourPrice = 2500;

// Const

const multiplier = 1.15;

const mainElement = document.getElementById('main-element');
const clickCount = document.getElementById('click-count');
const cpsCount = document.getElementById('cps-count');

const heading1 = document.getElementById('heading-1');
const heading2 = document.getElementById('heading-2');
const heading3 = document.getElementById('heading-3');
const heading4 = document.getElementById('heading-4');

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
}

const updateLocalStorage = setInterval(() => {
  updateStorage();
}, 1000);

function updateStorage() {
  localStorage.setItem('savedClicks', JSON.stringify(clicks));
  localStorage.setItem('savedCPS', JSON.stringify(cps));
  localStorage.setItem('savedItemOne', JSON.stringify(itemOnePrice));
  localStorage.setItem('savedItemTwo', JSON.stringify(itemTwoPrice));
  localStorage.setItem('savedItemThree', JSON.stringify(itemThreePrice));
  localStorage.setItem('savedItemFour', JSON.stringify(itemFourPrice));
}

// Intervals

const clicksPerSecond = setInterval(() => {
  clicks += cps;
}, 1000);

const updateGame = setInterval(() => {
  if (Number.isInteger(cps)) {
    cpsCount.textContent = `Per Second: ${Math.trunc(cps)}`;
  } else {
    cpsCount.textContent = `Per Second: ${Math.round(cps * 10) / 10}`;
  }

  if (Number.isInteger(clicks)) {
    clickCount.textContent = `Stoned Score: ${Math.trunc(clicks)}`;
  } else {
    clickCount.textContent = `Stoned Score: ${Math.round(clicks * 10) / 10}`;
  }

  if (Number.isInteger(itemOnePrice)) {
    heading1.textContent = `Cost: ${Math.trunc(itemOnePrice)} | +0.1 Sec`;
  } else {
    heading1.textContent = `Cost: ${
      Math.round(itemOnePrice * 10) / 10
    } | +0.1 Sec`;
  }

  if (Number.isInteger(itemTwoPrice)) {
    heading2.textContent = `Cost: ${Math.trunc(itemTwoPrice)} | +1 Sec`;
  } else {
    heading2.textContent = `Cost: ${
      Math.round(itemTwoPrice * 10) / 10
    } | +1 Sec`;
  }

  if (Number.isInteger(itemThreePrice)) {
    heading3.textContent = `Cost: ${Math.trunc(itemThreePrice)} | +5 Sec`;
  } else {
    heading3.textContent = `Cost: ${
      Math.round(itemThreePrice * 10) / 10
    } | +5 Sec`;
  }

  if (Number.isInteger(itemFourPrice)) {
    heading4.textContent = `Cost: ${Math.trunc(itemFourPrice)} | +15 Sec`;
  } else {
    heading4.textContent = `Cost: ${
      Math.round(itemFourPrice * 10) / 10
    } | +15 Sec`;
  }

  if (clicks >= 100) {
    clickCount.textContent = `Stoned Score: ${Math.trunc(clicks)}`;
  }
}, 10);

// Functions

function clearGame() {
  clicks = 0;
  cps = 0;

  itemOnePrice = 10;
  itemTwoPrice = 100;
  itemThreePrice = 500;
  itemFourPrice = 2500;

  localStorage.clear();
}

function mainFunction() {
  clicks++;
  mainElement.classList.add('animate');
  setTimeout(() => {
    mainElement.classList.remove('animate');
  }, 100);
}

function buyItemOne() {
  if (clicks >= itemOnePrice) {
    clicks -= itemOnePrice;
    cps += 0.1;
    itemOnePrice *= multiplier;
  }
}

function buyItemTwo() {
  if (clicks >= itemTwoPrice) {
    clicks -= itemTwoPrice;
    cps++;
    itemTwoPrice *= multiplier;
  }
}

function buyItemThree() {
  if (clicks >= itemThreePrice) {
    clicks -= itemThreePrice;
    cps += 5;
    itemThreePrice *= multiplier;
  }
}

function buyItemFour() {
  if (clicks >= itemFourPrice) {
    clicks -= itemFourPrice;
    cps += 15;
    itemFourPrice *= multiplier;
  }
}

// Event Listeners

mainElement.addEventListener('click', mainFunction);

item1.addEventListener('click', buyItemOne);
item2.addEventListener('click', buyItemTwo);
item3.addEventListener('click', buyItemThree);
item4.addEventListener('click', buyItemFour);

document.addEventListener('keydown', function (e) {
  if (e.key === ' ') {
    clearGame();
  }
});
