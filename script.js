'use strict';

// Let Vars
let clicks = 1000000;
let cps = 0;
let cpc = 1;

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
let mouseUpgradePrice = 250;

let itemOneCPS = 0.1;
let itemTwoCPS = 1;
let itemThreeCPS = 8;
let itemFourCPS = 50;

let skin = 1;

// Show Stuff
let showWeedUpgrade = false;
let showPillsUpgrade = false;
let showJointUpgrade = false;
let showBongUpgrade = false;

// Items
let pillsAreaShow = false;
let jointAreaShow = false;
let bongAreaShow = false;

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
const mouseHeading = document.getElementById('mouse-heading');

const weedUpgrade = document.getElementById('upgrade-weed');
const pillsUpgrade = document.getElementById('upgrade-pills');
const jointUpgrade = document.getElementById('upgrade-joint');
const bongUpgrade = document.getElementById('upgrade-bong');
const mouseUpgrade = document.getElementById('upgrade-mouse');

const weedUpgradeArea = document.getElementById('weed-upgrade-area');
const pillsUpgradeArea = document.getElementById('pills-upgrade-area');
const jointUpgradeArea = document.getElementById('joint-upgrade-area');
const bongUpgradeArea = document.getElementById('bong-upgrade-area');

const weedUI = document.getElementById('item1');
const pillsUI = document.getElementById('item2');
const jointUI = document.getElementById('item3');
const bongUI = document.getElementById('item4');

const pillsQuestion = document.getElementById('pills-question');
const jointQuestion = document.getElementById('joint-question');
const bongQuestion = document.getElementById('bong-question');

// Local Storage
populateUI();

function populateUI() {
  if (localStorage.getItem('savedClicks')) {
    clicks = JSON.parse(localStorage.getItem('savedClicks'));
  }

  if (localStorage.getItem('savedCPS')) {
    cps = JSON.parse(localStorage.getItem('savedCPS'));
  }

  if (localStorage.getItem('savedCPC')) {
    cpc = JSON.parse(localStorage.getItem('savedCPC'));
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

  if (localStorage.getItem('savedMouseUpgrade')) {
    mouseUpgradePrice = JSON.parse(localStorage.getItem('savedMouseUpgrade'));
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

  if (localStorage.getItem('savedWeedUpgradeArea')) {
    showWeedUpgrade = JSON.parse(localStorage.getItem('savedWeedUpgradeArea'));
    if (showBongUpgrade === true) {
      weedUpgradeArea.classList.remove('hide');
    }
  }

  if (localStorage.getItem('savedPillsUpgradeArea')) {
    if (localStorage.getItem('savedPillsUpgradeArea') === true) {
      pillsUpgradeArea.classList.remove('hide');
    }
  }

  if (localStorage.getItem('savedJointUpgradeArea')) {
    if (localStorage.getItem('savedUpgradeArea') === true) {
      jointUpgradeArea.classList.remove('hide');
    }
  }

  if (localStorage.getItem('savedBongUpgradeArea')) {
    if (localStorage.getItem('savedBongUpgradeArea') === true) {
      bongUpgradeArea.classList.remove('hide');
    }
  }

  // Items
  if (localStorage.getItem('savedPillsArea')) {
    pillsAreaShow = JSON.parse(localStorage.getItem('savedPillsArea'));
    if (pillsAreaShow === true) {
      pillsUI.classList.remove('hide');
      pillsQuestion.classList.add('hide');
      heading2.classList.remove('hide');
      number2.classList.remove('hide');
    }
  }

  if (localStorage.getItem('savedJointArea')) {
    jointAreaShow = JSON.parse(localStorage.getItem('savedJointArea'));
    if (jointAreaShow === true) {
      jointUI.classList.remove('hide');
      jointQuestion.classList.add('hide');
      heading3.classList.remove('hide');
      number3.classList.remove('hide');
    }
  }

  if (localStorage.getItem('savedBongArea')) {
    bongAreaShow = JSON.parse(localStorage.getItem('savedPillsArea'));
    if (bongAreaShow === true) {
      bongUI.classList.remove('hide');
      bongQuestion.classList.add('hide');
      heading4.classList.remove('hide');
      number4.classList.remove('hide');
    }
  }
}

const updateLocalStorage = setInterval(() => {
  updateStorage();
}, 100);

function updateStorage() {
  // Clicks / CPS / CPC
  localStorage.setItem('savedClicks', JSON.stringify(clicks));
  localStorage.setItem('savedCPS', JSON.stringify(cps));
  localStorage.setItem('savedCPC', JSON.stringify(cpc));
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
  localStorage.setItem('savedMouseUpgrade', JSON.stringify(mouseUpgradePrice));
  // Skin
  localStorage.setItem('skin', JSON.stringify(skin));

  // Upgrades
  localStorage.setItem('savedWeedUpgradeArea', JSON.stringify(showWeedUpgrade));
  localStorage.setItem(
    'savedPillsUpgradeArea',
    JSON.stringify(showPillsUpgrade)
  );
  localStorage.setItem(
    'savedJointUpgradeArea',
    JSON.stringify(showJointUpgrade)
  );
  localStorage.setItem('savedBongUpgradeArea', JSON.stringify(showBongUpgrade));

  // Items
  localStorage.setItem('savedPillsArea', JSON.stringify(pillsAreaShow));
  localStorage.setItem('savedJointArea', JSON.stringify(jointAreaShow));
  localStorage.setItem('savedBongArea', JSON.stringify(bongAreaShow));
}

// Intervals
const clicksPerSecond = setInterval(() => {
  clicks += cps;
}, 1000);

const updateGame = setInterval(() => {
  clickAnimation.textContent = `+${cpc}`;
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
  mouseHeading.textContent = `Mouse Upgrade | ${mouseUpgradePrice}`;

  // Show Stuff
  if (showWeedUpgrade === true) {
    weedUpgradeArea.classList.remove('hide');
  }
  if (showPillsUpgrade === true) {
    pillsUpgradeArea.classList.remove('hide');
  }
  if (showJointUpgrade === true) {
    jointUpgradeArea.classList.remove('hide');
  }
  if (showBongUpgrade === true) {
    bongUpgradeArea.classList.remove('hide');
  }

  // Set Offs
  if (itemOneNumber >= 3) {
    showWeedUpgrade = true;
    pillsAreaShow = true;
  }

  if (itemTwoNumber >= 3) {
    showPillsUpgrade = true;
    jointAreaShow = true;
  }

  if (itemThreeNumber >= 3) {
    showJointUpgrade = true;
    bongAreaShow = true;
  }

  if (itemFourNumber >= 3) {
    showBongUpgrade = true;
  }

  // Area Show
  if (pillsAreaShow === false) {
    item2.classList.add('hide');
    pillsQuestion.classList.remove('hide');
    pillsUI.classList.add('hide');
    heading2.classList.add('hide');
    number2.classList.add('hide');
  } else {
    item2.classList.remove('hide');
    pillsQuestion.classList.add('hide');
    pillsUI.classList.remove('hide');
    heading2.classList.remove('hide');
    number2.classList.remove('hide');
  }

  if (jointAreaShow === false) {
    item3.classList.add('hide');
    jointQuestion.classList.remove('hide');
    jointUI.classList.add('hide');
    heading3.classList.add('hide');
    number3.classList.add('hide');
  } else {
    item3.classList.remove('hide');
    jointQuestion.classList.add('hide');
    jointUI.classList.remove('hide');
    heading3.classList.remove('hide');
    number3.classList.remove('hide');
  }

  if (bongAreaShow === false) {
    item4.classList.add('hide');
    bongQuestion.classList.remove('hide');
    bongUI.classList.add('hide');
    heading4.classList.add('hide');
    number4.classList.add('hide');
  } else {
    item4.classList.remove('hide');
    bongQuestion.classList.add('hide');
    bongUI.classList.remove('hide');
    heading4.classList.remove('hide');
    number4.classList.remove('hide');
  }
}, 10);

// Functions
function clearGame() {
  clicks = 1000000;
  cps = 0;
  cpc = 1;

  itemOnePrice = 15;
  itemTwoPrice = 100;
  itemThreePrice = 1100;
  itemFourPrice = 12000;

  weedUpgradePrice = 100;
  pillsUpgradePrice = 500;
  jointUpgradePrice = 2750;
  bongUpgradePrice = 25000;
  mouseUpgradePrice = 250;

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

  // Upgrades
  weedUpgradeArea.classList.add('hide');
  pillsUpgradeArea.classList.add('hide');
  jointUpgradeArea.classList.add('hide');
  bongUpgradeArea.classList.add('hide');

  // Show Stuff

  // Upgrades
  showWeedUpgrade = false;
  showPillsUpgrade = false;
  showJointUpgrade = false;
  showBongUpgrade = false;

  // Items
  pillsAreaShow = false;
  jointAreaShow = false;
  bongAreaShow = false;

  localStorage.clear();
}

function mainFunction() {
  clicks += cpc;
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

function upgradeMouse() {
  if (clicks >= mouseUpgradePrice) {
    cpc *= 2;
    clicks -= mouseUpgradePrice;
    mouseUpgradePrice *= 2;
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
mouseUpgrade.addEventListener('click', upgradeMouse);

document.addEventListener('keydown', e => {
  if (e.key === 'Alt') {
    clearGame();
  }
});
