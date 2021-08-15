'use strict';

// Let

let clicks = 0;
let cps = 0;

let itemOnePrice = 10;
let itemTwoPrice = 100;
let itemThreePrice = 500;
let itemFourPrice = 2500;

// Const

const mainElement = document.getElementById('main-element');
const clickCount = document.getElementById('click-count');
const cpsCount = document.getElementById('cps-count');

const heading1 = document.getElementById('heading-1');
const heading2 = document.getElementById('heading-2');
const heading3 = document.getElementById('heading-3');
const heading4 = document.getElementById('heading-4');

// Functions

let clicksPerSecond = setInterval(() => {
  clicks += cps;
}, 1000);

let updateGame = setInterval(() => {
  if (Number.isInteger(clicks)) {
    clickCount.textContent = `Stoned Score: ${Math.trunc(clicks)}`;
  } else {
    clickCount.textContent = `Stoned Score: ${Math.round(clicks * 10) / 10}`;
  }

  if (Number.isInteger(cps)) {
    cpsCount.textContent = `Per Second: ${Math.trunc(cps)}`;
  } else {
    cpsCount.textContent = `Per Second: ${Math.round(cps * 10) / 10}`;
  }

  if (Number.isInteger(itemOnePrice)) {
    heading1.textContent = `Cost: ${Math.trunc(itemOnePrice)} | +0.1 Sec`;
  } else {
    heading1.textContent = `Cost: ${
      Math.round(itemOnePrice * 10) / 10
    } | +0.1 Sec`;
  }

  // Test

  if (Number.isInteger(itemTwoPrice)) {
    heading2.textContent = `Cost: ${Math.trunc(itemTwoPrice)} | +1 Sec`;
  } else {
    heading2.textContent = `Cost: ${
      Math.round(itemTwoPrice * 10) / 10
    } | +1 Sec`;
  }

  // End Test

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
    clickCount.textContent = `Stoned Score: ${Math.round(clicks)}`;
  }
}, 10);

function mainFunction() {
  clicks++;
}

function buyItemOne() {
  if (clicks >= itemOnePrice) {
    clicks -= itemOnePrice;
    cps += 0.1;
    itemOnePrice *= 1.15;
  }
}

function buyItemTwo() {
  if (clicks >= itemTwoPrice) {
    clicks -= itemTwoPrice;
    cps++;
    itemTwoPrice *= 1.15;
  }
}

function buyItemThree() {
  if (clicks >= itemThreePrice) {
    clicks -= itemThreePrice;
    cps += 5;
    itemThreePrice *= 1.15;
  }
}

function buyItemFour() {
  if (clicks >= itemFourPrice) {
    clicks -= itemFourPrice;
    cps += 15;
    itemFourPrice *= 1.15;
  }
}

// Event Listeners

mainElement.addEventListener('click', mainFunction);

item1.addEventListener('click', buyItemOne);
item2.addEventListener('click', buyItemTwo);
item3.addEventListener('click', buyItemThree);
item4.addEventListener('click', buyItemFour);
