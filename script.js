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

// let clicksPerSecond = setInterval(() => {
//   clicks += cps;
// }, 1000);

let updateGame = setInterval(() => {
  if (clicks % 1 !== 0) {
    clickCount.textContent = `Stoned Score: ${clicks.toFixed(1)}`;
  } else {
    clickCount.textContent = `Stoned Score: ${clicks}`;
  }

  if (cps % 1 !== 0) {
    cpsCount.textContent = `Per Second: ${cps.toFixed(1)}`;
  } else {
    cpsCount.textContent = `Per Second: ${cps}`;
  }

  if (itemOnePrice % 1 !== 0) {
    heading1.textContent = `Cost: ${itemOnePrice.toFixed(1)} | +0.1 Sec`;
  } else {
    heading1.textContent = `Cost: ${itemOnePrice} | +0.1 Sec`;
  }

  if (itemTwoPrice % 1 !== 0) {
    heading2.textContent = `Cost: ${itemTwoPrice.toFixed(1)} | +1 Sec`;
  } else {
    heading2.textContent = `Cost: ${itemTwoPrice} | +1 Sec`;
  }

  if (itemThreePrice % 1 !== 0) {
    heading3.textContent = `Cost: ${itemThreePrice.toFixed(1)} | +5 Sec`;
  } else {
    heading3.textContent = `Cost: ${itemThreePrice} | +5 Sec`;
  }

  if (itemFourPrice % 1 !== 0) {
    heading4.textContent = `Cost: ${itemFourPrice.toFixed(1)} | +15 Sec`;
  } else {
    heading4.textContent = `Cost: ${itemFourPrice} | +15 Sec`;
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
