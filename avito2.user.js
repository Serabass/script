// ==UserScript==
// @name         Avito prices sandbox
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.avito.ru/*
// @require      https://pp.serabass.net/avito/file.php
// @grant        none
// ==/UserScript==

  async function getPrices() {
    return new Promise(resolve => {
      window.fn = (file) => {
        let res = file
        .split(/[\r\n]+/)
        .map(line => line
             .trim()
             .split(/\s+/)
             .map(chunk => chunk.trim())
            );

        window._script__data = file;

        resolve(res);
        delete window.fn;
      };

      // let script = document.createElement('script');
      // script.src = serverRoot +'/file.php';
      // document.body.append(script);

      setInterval(() => {
        console.log(window._script__data);
      }, 1000);
    });
  }
