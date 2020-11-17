// ==UserScript==
// @name         Avito prices
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.avito.ru/*
// @grant        GM.xmlHttpRequest
// ==/UserScript==

let serverRoot = 'https://pp.serabass.net/avito';

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

async function clickSubmitButton2() {
  let btn = document
  .querySelector('[class^=layout-footer] > div > div > div:nth-child(2) > button');
  console.log('btn', btn);
  await delay(2000);
  btn.click();
}

function clickCheckboxes() {
  document.querySelectorAll('[class^=service-service] [class^=service-info] label[class^=checkbox-checkbox]')[0].click();
  document.querySelectorAll('[class^=service-service] [class^=service-info] label[class^=checkbox-checkbox]')[1].click();
}

function getId() {
  return document.querySelector('input[name="itemId"]').value;
}

async function getFile() {
  let res = await fetch(serverRoot + '/file.php');
  let text = await res.text();
  return text.trim();
}

function removeFirstLine() {
  return fetch(serverRoot + '/remove.php');
}

(async function() {
  'use strict';

  function getPrices() {
    return new Promise((resolve) => {
      GM.xmlHttpRequest({
        method: "GET",
        url: 'https://pp.serabass.net/avito/file.php',
        onload: function(response) {
          resolve(response);
        }
      });
    })
    .then(response => response.responseText.trim())
    .then(responseText => responseText.split(/[\r\n]+/).map(line => line.split(/\s+/)))
    ;
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

  await delay(5000);

  setPrice(price);
  selectFree();
  await delay(5000);
  clickSubmitButton();
  await delay(15000);
  clickCheckboxes();
  setPrice(price);
  await clickSubmitButton2();

  //let next = prices[priceLineIndex + 1];

  //if (!next) {
  //  console.error('No next line. Stopping');
  //  return;
  //}

  //let [nextId] = next;

  //delay(1000);

  //location = `https://www.avito.ru/additem?draftId=${nextId}`;
})();
