// ==UserScript==
// @name         Avito prices
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.avito.ru/*
// @grant        none
// ==/UserScript==

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
} 

function setPrice(price) {
  document.querySelector('input#price').value = price.toString();
  document.querySelector('input[name=price][type=hidden]').value = price.toString();  
}

function selectFree() {
  document.querySelector('[for="free"]').click();
}

function clickSubmitButton() {
  let btn = document
    .querySelector('[class^=layout-footer] > div > div > div:nth-child(2) > button');
  console.log('btn', btn);
  btn.click();
}

function clickSubmitButton2() {
  let btn = document
    .querySelector('[class^=layout-footer] > div > div > div:nth-child(2) > button');
  console.log('btn', btn);
  btn.click();
}

function getId() {
  return document.querySelector('input[name="itemId"]').value;
}

(async function() {
  'use strict';

  async function getPrices() {
    let links = `
    2032070576 8000
    `.trim();

    return links
      .split(/[\r\n]+/)
      .map(line => line
        .trim()
        .split(/\s+/)
        .map(chunk => chunk.trim())
      );
  }

  await delay(2000);

  let prices = await getPrices();
  let url = new URL(location);
  let draftId = getId();

  if (!draftId) {
    console.error('No draft id');
    return;
  }

  let priceLineIndex = prices.findIndex(([id, price]) => draftId === id);

  if (priceLineIndex == -1) {
    console.error('No price line');
    return;
  }

  let [id, price] = prices[priceLineIndex];

  await delay(2000);

  setPrice(price);
  selectFree();
  delay(2000);
  clickSubmitButton();
  delay(2000);
  clickSubmitButton2();


  //let next = prices[priceLineIndex + 1];

  //if (!next) {
  //  console.error('No next line. Stopping');
  //  return;
  //}

  //let [nextId] = next;

  //delay(1000);

  //location = `https://www.avito.ru/additem?draftId=${nextId}`;
})();
