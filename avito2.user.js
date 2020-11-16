// ==UserScript==
// @name         Avito prices sandbox
// @grant        GM.xmlHttpRequest
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.avito.ru/*
// @require      https://pp.serabass.net/avito/file.php
// ==/UserScript==

GM.xmlHttpRequest({
  method: "GET",
  url: 'https://pp.serabass.net/avito/file.php',
  onload: function(response) {
    debugger;
    console.log(response);
  }
});