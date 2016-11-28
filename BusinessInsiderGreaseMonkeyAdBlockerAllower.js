// ==UserScript==
// @name        BusinessInsiderPGrabber
// @namespace   pGrab
// @include     http://www.businessinsider.com/*
// @grant       none
// ==/UserScript==
var myInterval;
var count = 0;

function removeAdBlockerBlocker() {
  
  

var parent = document.getElementsByTagName("body")[0];

parent.style.overflow = "scroll";

var child = document.getElementsByClassName("tp-modal")[0];
  
var backDrop = document.getElementsByClassName("tp-backdrop")[0];
  if (child != null) {
      parent.removeChild(child);
      parent.removeChild(backDrop);
      count++;
  }
  
  if (count > 0) {
    clearInterval(myInterval);
  }
}

//myInterval = setInterval(removeAdBlockerBlocker, 2000);