// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-03-17
// @description  try to take over the world!
// @author       You
// @match        *://google.*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        GM_openInTab
// ==/UserScript==

(function () {
  "use strict";
  console.log("running");
  const links = ["www.google.com", "www.yahoo.com", "www.bing.com"];
  const append = document.querySelector(
    "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center"
  );
  const newElement = document.createElement("button");
  newElement.textContent = "TEST";
  newElement.id = "testButton";
  newElement.onclick = () => {
    console.log("clicked");
    links.forEach((link, index) => {
      console.log("open", index);
      var randomNum = Math.floor(Math.random() * 500);
      setTimeout(() => {
        GM_openInTab(link, false);
      }, 100 * randomNum);
    });
  };
  newElement.style.backgroundColor = "red";
  append.appendChild(newElement);
})();
