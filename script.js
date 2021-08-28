'use strict';

// Let Vars
let clicks = 0;
let cps = 0;

let itemOnePrice = 15;
let itemTwoPrice = 100;
let itemThreePrice = 1100;
let itemFourPrice = 12000;

let itemOneNumber = 0;
let itemTwoNumber = 0;
let itemThreeNumber = 0;
let itemFourNumber = 0;

let weedUpgradePrice = 100;
let pillsUpgradePrice = 500;
let jointUpgradePrice = 2750;
let bongUpgradePrice = 25000;

let itemOneCPS = 0.1;
let itemTwoCPS = 1;
let itemThreeCPS = 8;
let itemFourCPS = 50;

let skin = 1;

// Const Vars
const multiplier = 1.15;
const upgradeMultiplier = 2;

const mainElement = document.getElementById('main-element');
const newSkinBtn = document.getElementById('new-skin');
const clickMe = document.getElementById('click-me');
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

const weedHeading = document.getElementById('weed-heading');
const pillsHeading = document.getElementById('pills-heading');
const jointHeading = document.getElementById('joint-heading');
const bongHeading = document.getElementById('bong-heading');

const weedUpgrade = document.getElementById('upgrade-weed');
const pillsUpgrade = document.getElementById('upgrade-pills');
const jointUpgrade = document.getElementById('upgrade-joint');
const bongUpgrade = document.getElementById('upgrade-bong');

// Local Storage
populateUI();

function populateUI() {
  if (localStorage.getItem('savedClicks')) {
    clicks = JSON.parse(localStorage.getItem('savedClicks'));
  }

  if (localStorage.getItem('savedCPS')) {
    cps = JSON.parse(localStorage.getItem('savedCPS'));
  }

  //********************************************************
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

  // ***************************************************
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

  // Item CPS
  if (localStorage.getItem('savedItemOneCPS')) {
    itemOneCPS = JSON.parse(localStorage.getItem('savedItemOneCPS'));
  }

  if (localStorage.getItem('savedItemTwoCPS')) {
    itemTwoCPS = JSON.parse(localStorage.getItem('savedItemTwoCPS'));
  }

  if (localStorage.getItem('savedItemThreeCPS')) {
    itemThreeCPS = JSON.parse(localStorage.getItem('savedItemThreeCPS'));
  }

  if (localStorage.getItem('savedItemFourCPS')) {
    itemFourCPS = JSON.parse(localStorage.getItem('savedItemFourCPS'));
  }

  // Upgrades
  if (localStorage.getItem('savedWeedUpgrade')) {
    weedUpgradePrice = JSON.parse(localStorage.getItem('savedWeedUpgrade'));
  }

  if (localStorage.getItem('savedPillsUpgrade')) {
    pillsUpgradePrice = JSON.parse(localStorage.getItem('savedPillsUpgrade'));
  }

  if (localStorage.getItem('savedJointUpgrade')) {
    jointUpgradePrice = JSON.parse(localStorage.getItem('savedJointUpgrade'));
  }

  if (localStorage.getItem('savedBongUpgrade')) {
    bongUpgradePrice = JSON.parse(localStorage.getItem('savedBongUpgrade'));
  }

  if (localStorage.getItem('skin')) {
    skin = JSON.parse(localStorage.getItem('skin'));

    if (skin === 1) {
      mainElement.src = '/img/Nathan-Starter.png';
      newSkinBtn.style.display = 'block';
      clickMe.classList.add('hide');
    } else {
      mainElement.src = '/img/Nathan.png';
      newSkinBtn.style.display = 'none';
      clickMe.classList.remove('hide');
    }
  }
}

const updateLocalStorage = setInterval(() => {
  updateStorage();
}, 100);

function updateStorage() {
  // Clicks / CPS
  localStorage.setItem('savedClicks', JSON.stringify(clicks));
  localStorage.setItem('savedCPS', JSON.stringify(cps));
  // Price
  localStorage.setItem('savedItemOne', JSON.stringify(itemOnePrice));
  localStorage.setItem('savedItemTwo', JSON.stringify(itemTwoPrice));
  localStorage.setItem('savedItemThree', JSON.stringify(itemThreePrice));
  localStorage.setItem('savedItemFour', JSON.stringify(itemFourPrice));
  // Number
  localStorage.setItem('savedNumberOne', JSON.stringify(itemOneNumber));
  localStorage.setItem('savedNumberTwo', JSON.stringify(itemTwoNumber));
  localStorage.setItem('savedNumberThree', JSON.stringify(itemThreeNumber));
  localStorage.setItem('savedNumberFour', JSON.stringify(itemFourNumber));
  // Item CPS
  localStorage.setItem('savedItemOneCPS', JSON.stringify(itemOneCPS));
  localStorage.setItem('savedItemTwoCPS', JSON.stringify(itemTwoCPS));
  localStorage.setItem('savedItemThreeCPS', JSON.stringify(itemThreeCPS));
  localStorage.setItem('savedItemFourCPS', JSON.stringify(itemFourCPS));

  // Upgrades
  localStorage.setItem('savedWeedUpgrade', JSON.stringify(weedUpgradePrice));
  localStorage.setItem('savedPillsUpgrade', JSON.stringify(pillsUpgradePrice));
  localStorage.setItem('savedJointUpgrade', JSON.stringify(jointUpgradePrice));
  localStorage.setItem('savedBongUpgrade', JSON.stringify(bongUpgradePrice));
  // Skin
  localStorage.setItem('skin', JSON.stringify(skin));
}

// Intervals
const clicksPerSecond = setInterval(() => {
  clicks += cps;
}, 1000);

const updateGame = setInterval(() => {
  cps =
    itemOneCPS * itemOneNumber +
    itemTwoCPS * itemTwoNumber +
    itemThreeCPS * itemThreeNumber +
    itemFourCPS * itemFourNumber;
  cpsCount.textContent = `Per Second: ${Math.round(cps * 10) / 10}`;

  clickCount.textContent = `Stoned Score: ${Math.floor(clicks)}`;

  heading1.textContent = `Cost: ${itemOnePrice} | +${itemOneCPS} Sec`;
  heading2.textContent = `Cost: ${itemTwoPrice} | +${itemTwoCPS} Sec`;
  heading3.textContent = `Cost: ${itemThreePrice} | +${itemThreeCPS} Sec`;
  heading4.textContent = `Cost: ${itemFourPrice} | +${itemFourCPS} Sec`;

  number1.textContent = `${itemOneNumber}`;
  number2.textContent = `${itemTwoNumber}`;
  number3.textContent = `${itemThreeNumber}`;
  number4.textContent = `${itemFourNumber}`;

  weedHeading.textContent = `Weed Upgrade | ${weedUpgradePrice}`;
  pillsHeading.textContent = `Pills Upgrade | ${pillsUpgradePrice}`;
  jointHeading.textContent = `Joint Upgrade | ${jointUpgradePrice}`;
  bongHeading.textContent = `Bong Upgrade | ${bongUpgradePrice}`;
}, 10);

// Functions
function clearGame() {
  clicks = 0;
  cps = 0;

  itemOnePrice = 15;
  itemTwoPrice = 100;
  itemThreePrice = 1100;
  itemFourPrice = 12000;

  weedUpgradePrice = 100;
  pillsUpgradePrice = 500;
  jointUpgradePrice = 2750;
  bongUpgradePrice = 25000;

  itemOneNumber = 0;
  itemTwoNumber = 0;
  itemThreeNumber = 0;
  itemFourNumber = 0;

  itemOneCPS = 0.1;
  itemTwoCPS = 1;
  itemThreeCPS = 8;
  itemFourCPS = 50;

  // New Skin Stuff
  skin = 1;
  mainElement.src = '/img/Nathan-Starter.png';
  newSkinBtn.style.display = 'block';
  clickMe.classList.add('hide');

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
    cps += itemOneCPS;
    itemOnePrice *= multiplier;
    itemOnePrice = Math.round(itemOnePrice);
    itemOneNumber++;
  }
}

function buyItemTwo() {
  if (clicks >= itemTwoPrice) {
    clicks -= itemTwoPrice;
    cps += itemTwoCPS;
    itemTwoPrice *= multiplier;
    itemTwoPrice = Math.round(itemTwoPrice);
    itemTwoNumber++;
  }
}

function buyItemThree() {
  if (clicks >= itemThreePrice) {
    clicks -= itemThreePrice;
    cps += itemThreeCPS;
    itemThreePrice *= multiplier;
    itemThreePrice = Math.round(itemThreePrice);
    itemThreeNumber++;
  }
}

function buyItemFour() {
  if (clicks >= itemFourPrice) {
    clicks -= itemFourPrice;
    cps += itemFourCPS;
    itemFourPrice *= multiplier;
    itemFourPrice = Math.round(itemFourPrice);
    itemFourNumber++;
  }
}

// New Skin
function newSkin() {
  if (clicks >= 150) {
    clicks -= 150;
    newSkinBtn.style.display = 'none';
    clickMe.classList.remove('hide');
    mainElement.src = '/img/Nathan.png';
    skin = 2;
  }
}

// Upgrades
function upgradeItemWeed() {
  if (clicks >= weedUpgradePrice) {
    itemOneCPS *= 2;
    itemOneCPS = Math.round(itemOneCPS * 10) / 10;
    clicks -= weedUpgradePrice;
    weedUpgradePrice *= upgradeMultiplier;
    weedUpgradePrice = Math.round(weedUpgradePrice);
  }
}

function upgradeItemPills() {
  if (clicks >= pillsUpgradePrice) {
    itemTwoCPS *= 2;
    itemTwoCPS = Math.round(itemTwoCPS);
    clicks -= pillsUpgradePrice;
    pillsUpgradePrice *= upgradeMultiplier;
    pillsUpgradePrice = Math.round(pillsUpgradePrice);
  }
}

function upgradeItemJoint() {
  if (clicks >= jointUpgradePrice) {
    itemThreeCPS *= 2;
    itemThreeCPS = Math.round(itemThreeCPS);
    clicks -= jointUpgradePrice;
    jointUpgradePrice *= upgradeMultiplier;
    jointUpgradePrice = Math.round(jointUpgradePrice);
  }
}

function upgradeItemBong() {
  if (clicks >= bongUpgradePrice) {
    itemFourCPS *= 2;
    itemFourCPS = Math.round(itemFourCPS);
    clicks -= bongUpgradePrice;
    bongUpgradePrice *= upgradeMultiplier;
    bongUpgradePrice = Math.round(bongUpgradePrice);
  }
}

// Event Listeners
mainElement.addEventListener('click', mainFunction);

item1.addEventListener('click', buyItemOne);
item2.addEventListener('click', buyItemTwo);
item3.addEventListener('click', buyItemThree);
item4.addEventListener('click', buyItemFour);

newSkinBtn.addEventListener('click', newSkin);

weedUpgrade.addEventListener('click', upgradeItemWeed);
pillsUpgrade.addEventListener('click', upgradeItemPills);
jointUpgrade.addEventListener('click', upgradeItemJoint);
bongUpgrade.addEventListener('click', upgradeItemBong);

document.addEventListener('keydown', e => {
  if (e.key === 'Alt') {
    clearGame();
  }
});
