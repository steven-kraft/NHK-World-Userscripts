// ==UserScript==
// @name        NHK World Schedule "Skip to Now" Function
// @namespace   steven.kraftjp@gmail.com
// @description Adds "Skip to Now" option to NHK World TV Schedule page.
// @include     *nhk.or.jp/nhkworld/en/tv/schedule*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==

waitForKeyElements(".schedule-time-nav__entry", addNow);
waitForKeyElements(".tv-schedule.tv-schedule--current", addCurrent);

function addNow(jnode) {
  if (jnode[0].childElementCount == 4) {
    var li = document.createElement("li");
    li.className = "schedule-time__item";
    var t = document.createTextNode("Now -");
    var a = document.createElement("a");
    a.className = "schedule-time__link";
    a.href = "#schedule-now";

    a.appendChild(t);
    li.appendChild(a);
    jnode[0].appendChild(li);
  }
}

function addCurrent(jnode) {
    jnode[0].setAttribute("id", "schedule-now");
}