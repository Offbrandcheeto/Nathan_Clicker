'use strict';

// Let Vars
let clicks = 0;
let cps = 0;
let cpc = 1;

let itemOnePrice = 15;
let itemTwoPrice = 100;
let itemThreePrice = 1100;
let itemFourPrice = 12000;
let itemFivePrice = 130000;

let itemOneNumber = 0;
let itemTwoNumber = 0;
let itemThreeNumber = 0;
let itemFourNumber = 0;
let itemFiveNumber = 0;

let weedUpgradePrice = 200;
let pillsUpgradePrice = 1000;
let jointUpgradePrice = 5000;
let bongUpgradePrice = 50000;
let beerUpgradePrice = 750000;
let mouseUpgradePrice = 500;

let itemOneCPS = 0.1;
let itemTwoCPS = 1;
let itemThreeCPS = 8;
let itemFourCPS = 50;
let itemFiveCPS = 250;

let skin = 1;

// Show Stuff
let showWeedUpgrade = false;
let showPillsUpgrade = false;
let showJointUpgrade = false;
let showBongUpgrade = false;
let showBeerUpgrade = false;

// Items
let pillsAreaShow = false;
let jointAreaShow = false;
let bongAreaShow = false;
let beerAreaShow = false;

// Saying
let saying = '';

// News
let newsStory = '';

// Const Vars
const multiplier = 1.15;
const upgradeMultiplier = 3;

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
const heading5 = document.getElementById('heading-5');

const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const number3 = document.getElementById('number-3');
const number4 = document.getElementById('number-4');
const number5 = document.getElementById('number-5');

const weedHeading = document.getElementById('weed-heading');
const pillsHeading = document.getElementById('pills-heading');
const jointHeading = document.getElementById('joint-heading');
const bongHeading = document.getElementById('bong-heading');
const beerHeading = document.getElementById('beer-heading');
const mouseHeading = document.getElementById('mouse-heading');

const weedUpgrade = document.getElementById('upgrade-weed');
const pillsUpgrade = document.getElementById('upgrade-pills');
const jointUpgrade = document.getElementById('upgrade-joint');
const bongUpgrade = document.getElementById('upgrade-bong');
const beerUpgrade = document.getElementById('upgrade-beer');
const mouseUpgrade = document.getElementById('upgrade-mouse');

const weedUpgradeArea = document.getElementById('weed-upgrade-area');
const pillsUpgradeArea = document.getElementById('pills-upgrade-area');
const jointUpgradeArea = document.getElementById('joint-upgrade-area');
const bongUpgradeArea = document.getElementById('bong-upgrade-area');
const beerUpgradeArea = document.getElementById('beer-upgrade-area');

const weedUI = document.getElementById('item1');
const pillsUI = document.getElementById('item2');
const jointUI = document.getElementById('item3');
const bongUI = document.getElementById('item4');
const beerUI = document.getElementById('item5');

const pillsQuestion = document.getElementById('pills-question');
const jointQuestion = document.getElementById('joint-question');
const bongQuestion = document.getElementById('bong-question');
const beerQuestion = document.getElementById('beer-question');

const news = document.getElementById('news');
const bitchHeading = document.getElementById('bitch-text');

bitchHeading.textContent = `welcome to nathan clicker!`;
const list = [
  'fuck school, click me bitch!',
  "click don't think!",
  'damn that click felt good!',
  'give a click for communism!',
  'make a ginger smile today!',
  "vaping doesn't gain you clicks!",
  "how's class going?",
  'are you usually this slow?',
  'you have the ability to read!',
  'incoming teacher!',
  'my ass could click faster!',
  "don't look at me like that!",
  "you're not wasting your life!",
  "suck a dick if you don't click!",
  'practice safe clicking!',
];

const newsList = [
  'News: Dylan richards pregnant, doctors dumbfounded.',
  'News: JHS ranked first in the nation in slow ass walking.',
  'News: New element found in red hair could help cure cancer.',
  'News: School toilet clogged for first time since 1969.',
  'News: Overweight teens may not be eating enough, study says.',
  'News: Nathan clicker rated #1 game in antarctica.',
  'News: Kid struggles when asked how to spell "JHS".',
  'News: Nathan cole to enter local beauty pageant.',
  'News: Parker glas voted sexist ginger alive.',
  'News: Nathan cole torches 3rd graders in 800m',
];

// Local Storage
populateUI();
getNewNews();

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

  if (localStorage.getItem('savedItemFive')) {
    itemFivePrice = JSON.parse(localStorage.getItem('savedItemFive'));
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

  if (localStorage.getItem('savedNumberFive')) {
    itemFiveNumber = JSON.parse(localStorage.getItem('savedNumberFive'));
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

  if (localStorage.getItem('savedItemFiveCPS')) {
    itemFiveCPS = JSON.parse(localStorage.getItem('savedItemFiveCPS'));
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

  if (localStorage.getItem('savedBeerUpgrade')) {
    beerUpgradePrice = JSON.parse(localStorage.getItem('savedBeerUpgrade'));
  }

  if (localStorage.getItem('savedMouseUpgrade')) {
    mouseUpgradePrice = JSON.parse(localStorage.getItem('savedMouseUpgrade'));
  }

  // if (localStorage.getItem('skin')) {
  //   skin = JSON.parse(localStorage.getItem('skin'));

  //   if (skin === 1) {
  //     mainElement.src = '/img/Nathan-Starter.png';
  //     newSkinBtn.style.display = 'block';
  //     clickMe.classList.add('hide');
  //   } else {
  //     mainElement.src = '/img/Nathan.png';
  //     newSkinBtn.style.display = 'none';
  //     clickMe.classList.remove('hide');
  //   }
  // }

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

  if (localStorage.getItem('savedBeerUpgradeArea')) {
    if (localStorage.getItem('savedBeerUpgradeArea') === true) {
      beerUpgradeArea.classList.remove('hide');
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
    bongAreaShow = JSON.parse(localStorage.getItem('savedBongArea'));
    if (bongAreaShow === true) {
      bongUI.classList.remove('hide');
      bongQuestion.classList.add('hide');
      heading4.classList.remove('hide');
      number4.classList.remove('hide');
    }
  }

  if (localStorage.getItem('savedBeerArea')) {
    beerAreaShow = JSON.parse(localStorage.getItem('savedBeerArea'));
    if (beerAreaShow === true) {
      beerUI.classList.remove('hide');
      beerQuestion.classList.add('hide');
      heading5.classList.remove('hide');
      number5.classList.remove('hide');
    }
  }
}

// Sayings
const updateText = setInterval(() => {
  getRandomSaying();
}, 5000);

function getRandomSaying() {
  saying = `${list[Math.floor(Math.random() * list.length)]}`;
  bitchHeading.textContent = saying;
}

// News
const updateNews = setInterval(() => {
  getNewNews();
}, 7500);

function getNewNews() {
  newsStory = `${newsList[Math.floor(Math.random() * newsList.length)]}`;
  news.textContent = newsStory;
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
  localStorage.setItem('savedItemFive', JSON.stringify(itemFivePrice));
  // Number
  localStorage.setItem('savedNumberOne', JSON.stringify(itemOneNumber));
  localStorage.setItem('savedNumberTwo', JSON.stringify(itemTwoNumber));
  localStorage.setItem('savedNumberThree', JSON.stringify(itemThreeNumber));
  localStorage.setItem('savedNumberFour', JSON.stringify(itemFourNumber));
  localStorage.setItem('savedNumberFive', JSON.stringify(itemFiveNumber));
  // Item CPS
  localStorage.setItem('savedItemOneCPS', JSON.stringify(itemOneCPS));
  localStorage.setItem('savedItemTwoCPS', JSON.stringify(itemTwoCPS));
  localStorage.setItem('savedItemThreeCPS', JSON.stringify(itemThreeCPS));
  localStorage.setItem('savedItemFourCPS', JSON.stringify(itemFourCPS));
  localStorage.setItem('savedItemFiveCPS', JSON.stringify(itemFiveCPS));

  // Upgrades
  localStorage.setItem('savedWeedUpgrade', JSON.stringify(weedUpgradePrice));
  localStorage.setItem('savedPillsUpgrade', JSON.stringify(pillsUpgradePrice));
  localStorage.setItem('savedJointUpgrade', JSON.stringify(jointUpgradePrice));
  localStorage.setItem('savedBongUpgrade', JSON.stringify(bongUpgradePrice));
  localStorage.setItem('savedBeerUpgrade', JSON.stringify(beerUpgradePrice));
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
  localStorage.setItem('savedBeerUpgradeArea', JSON.stringify(showBeerUpgrade));

  // Items
  localStorage.setItem('savedPillsArea', JSON.stringify(pillsAreaShow));
  localStorage.setItem('savedJointArea', JSON.stringify(jointAreaShow));
  localStorage.setItem('savedBongArea', JSON.stringify(bongAreaShow));
  localStorage.setItem('savedBeerArea', JSON.stringify(beerAreaShow));
}

// Intervals
const clicksPerSecond = setInterval(() => {
  clicks += cps;
}, 1000);

const updateGame = setInterval(() => {
  document.title = `Nathan Clicker | Clicks: ${Math.floor(clicks)}`;
  clickAnimation.textContent = `+${cpc}`;
  cps =
    itemOneCPS * itemOneNumber +
    itemTwoCPS * itemTwoNumber +
    itemThreeCPS * itemThreeNumber +
    itemFourCPS * itemFourNumber +
    itemFiveCPS * itemFiveNumber;
  cpsCount.textContent = `Per Second: ${Math.round(cps * 10) / 10}`;

  clickCount.textContent = `Total Clicks: ${Math.floor(clicks)}`;

  heading1.textContent = `Cost: ${itemOnePrice} | +${itemOneCPS} Sec`;
  heading2.textContent = `Cost: ${itemTwoPrice} | +${itemTwoCPS} Sec`;
  heading3.textContent = `Cost: ${itemThreePrice} | +${itemThreeCPS} Sec`;
  heading4.textContent = `Cost: ${itemFourPrice} | +${itemFourCPS} Sec`;
  heading5.textContent = `Cost: ${itemFivePrice} | +${itemFiveCPS} Sec`;

  number1.textContent = `${itemOneNumber}`;
  number2.textContent = `${itemTwoNumber}`;
  number3.textContent = `${itemThreeNumber}`;
  number4.textContent = `${itemFourNumber}`;
  number5.textContent = `${itemFiveNumber}`;

  weedHeading.textContent = `Weed Upgrade | ${weedUpgradePrice}`;
  pillsHeading.textContent = `Pills Upgrade | ${pillsUpgradePrice}`;
  jointHeading.textContent = `Joint Upgrade | ${jointUpgradePrice}`;
  bongHeading.textContent = `Bong Upgrade | ${bongUpgradePrice}`;
  beerHeading.textContent = `Beer Upgrade | ${beerUpgradePrice}`;
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
  if (showBeerUpgrade === true) {
    beerUpgradeArea.classList.remove('hide');
  }

  // Set Offs
  if (itemOneNumber >= 5) {
    showWeedUpgrade = true;
    pillsAreaShow = true;
  }

  if (itemTwoNumber >= 5) {
    showPillsUpgrade = true;
    jointAreaShow = true;
  }

  if (itemThreeNumber >= 5) {
    showJointUpgrade = true;
    bongAreaShow = true;
    beerQuestion.classList.remove('hide');
  }

  if (itemFourNumber >= 5) {
    showBongUpgrade = true;
    beerAreaShow = true;
  }

  if (itemFiveNumber >= 5) {
    showBeerUpgrade = true;
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

  if (beerAreaShow === false) {
    item5.classList.add('hide');
    beerUI.classList.add('hide');
    heading5.classList.add('hide');
    number5.classList.add('hide');
  } else {
    item5.classList.remove('hide');
    beerQuestion.classList.add('hide');
    beerUI.classList.remove('hide');
    heading5.classList.remove('hide');
    number5.classList.remove('hide');
  }

  if (clicks < itemOnePrice) {
    item1.style.opacity = 0.6;
  } else {
    item1.style.opacity = 1;
  }

  if (clicks < itemTwoPrice) {
    item2.style.opacity = 0.6;
  } else {
    item2.style.opacity = 1;
  }

  if (clicks < itemThreePrice) {
    item3.style.opacity = 0.6;
  } else {
    item3.style.opacity = 1;
  }

  if (clicks < itemFourPrice) {
    item4.style.opacity = 0.6;
  } else {
    item4.style.opacity = 1;
  }

  if (clicks < itemFivePrice) {
    item5.style.opacity = 0.6;
  } else {
    item5.style.opacity = 1;
  }

  if (clicks < weedUpgradePrice) {
    weedUpgrade.style.opacity = 0.6;
  } else {
    weedUpgrade.style.opacity = 1;
  }

  if (clicks < pillsUpgradePrice) {
    pillsUpgrade.style.opacity = 0.6;
  } else {
    pillsUpgrade.style.opacity = 1;
  }

  if (clicks < jointUpgradePrice) {
    jointUpgrade.style.opacity = 0.6;
  } else {
    jointUpgrade.style.opacity = 1;
  }

  if (clicks < bongUpgradePrice) {
    bongUpgrade.style.opacity = 0.6;
  } else {
    bongUpgrade.style.opacity = 1;
  }

  if (clicks < beerUpgradePrice) {
    beerUpgrade.style.opacity = 0.6;
  } else {
    beerUpgrade.style.opacity = 1;
  }

  if (clicks < mouseUpgradePrice) {
    mouseUpgrade.style.opacity = 0.6;
  } else {
    mouseUpgrade.style.opacity = 1;
  }
}, 10);

// Functions
function clearGame() {
  clicks = 0;
  cps = 0;
  cpc = 1;

  bitchHeading.textContent = `welcome to nathan clicker!`;

  itemOnePrice = 15;
  itemTwoPrice = 100;
  itemThreePrice = 1100;
  itemFourPrice = 12000;
  itemFivePrice = 130000;

  weedUpgradePrice = 200;
  pillsUpgradePrice = 1000;
  jointUpgradePrice = 5000;
  bongUpgradePrice = 50000;
  beerUpgradePrice = 750000;
  mouseUpgradePrice = 500;

  itemOneNumber = 0;
  itemTwoNumber = 0;
  itemThreeNumber = 0;
  itemFourNumber = 0;
  itemFiveNumber = 0;

  itemOneCPS = 0.1;
  itemTwoCPS = 1;
  itemThreeCPS = 8;
  itemFourCPS = 50;
  itemFiveCPS = 250;

  // SKIN STUFF
  // skin = 1;
  // mainElement.src = '/img/Nathan-Starter.png';
  // newSkinBtn.style.display = 'block';
  // clickMe.classList.add('hide');

  // Upgrades
  weedUpgradeArea.classList.add('hide');
  pillsUpgradeArea.classList.add('hide');
  jointUpgradeArea.classList.add('hide');
  bongUpgradeArea.classList.add('hide');
  beerUpgradeArea.classList.add('hide');

  // Show Stuff

  // Upgrades
  showWeedUpgrade = false;
  showPillsUpgrade = false;
  showJointUpgrade = false;
  showBongUpgrade = false;
  showBeerUpgrade = false;

  // Items
  pillsAreaShow = false;
  jointAreaShow = false;
  bongAreaShow = false;
  beerAreaShow = false;

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
    itemOnePrice *= multiplier;
    itemOnePrice = Math.round(itemOnePrice);
    itemOneNumber++;
  }
}

function buyItemTwo() {
  if (clicks >= itemTwoPrice) {
    clicks -= itemTwoPrice;
    itemTwoPrice *= multiplier;
    itemTwoPrice = Math.round(itemTwoPrice);
    itemTwoNumber++;
  }
}

function buyItemThree() {
  if (clicks >= itemThreePrice) {
    clicks -= itemThreePrice;
    itemThreePrice *= multiplier;
    itemThreePrice = Math.round(itemThreePrice);
    itemThreeNumber++;
  }
}

function buyItemFour() {
  if (clicks >= itemFourPrice) {
    clicks -= itemFourPrice;
    itemFourPrice *= multiplier;
    itemFourPrice = Math.round(itemFourPrice);
    itemFourNumber++;
  }
}

function buyItemFive() {
  if (clicks >= itemFivePrice) {
    clicks -= itemFivePrice;
    itemFivePrice *= multiplier;
    itemFivePrice = Math.round(itemFivePrice);
    itemFiveNumber++;
  }
}

// New Skin
function newSkin() {
  if (clicks >= 250) {
    clicks -= 250;
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

function upgradeItemBeer() {
  if (clicks >= beerUpgradePrice) {
    itemFiveCPS *= 2;
    itemFiveCPS = Math.round(itemFiveCPS);
    clicks -= beerUpgradePrice;
    beerUpgradePrice *= upgradeMultiplier;
    beerUpgradePrice = Math.round(beerUpgradePrice);
  }
}

function upgradeMouse() {
  if (clicks >= mouseUpgradePrice) {
    cpc *= 2;
    clicks -= mouseUpgradePrice;
    mouseUpgradePrice *= upgradeMultiplier;
  }
}

// Event Listeners
mainElement.addEventListener('click', mainFunction);

item1.addEventListener('click', buyItemOne);
item2.addEventListener('click', buyItemTwo);
item3.addEventListener('click', buyItemThree);
item4.addEventListener('click', buyItemFour);
item5.addEventListener('click', buyItemFive);

// newSkinBtn.addEventListener('click', newSkin);

weedUpgrade.addEventListener('click', upgradeItemWeed);
pillsUpgrade.addEventListener('click', upgradeItemPills);
jointUpgrade.addEventListener('click', upgradeItemJoint);
bongUpgrade.addEventListener('click', upgradeItemBong);
beerUpgrade.addEventListener('click', upgradeItemBeer);
mouseUpgrade.addEventListener('click', upgradeMouse);

document.addEventListener('keydown', e => {
  if (e.key === 'Alt') {
    clearGame();
  }
});
