// ==UserScript==
// @name        BusinessInsiderGreaseMonkeyAdBlockerAllower
// @namespace   pGrab
// @include     http://www.businessinsider.com/*
// @grant       none
// ==/UserScript==
var myInterval;


function removeAdBlockerBlocker() {
//Grab the parent element which in this case is body
var parent = document.getElementsByTagName("body")[0];
  
//Set overflow to scroll on body, its set to hidden when the ad-blocker is detected
parent.style.overflow = "scroll";
  
//grab the child elements that block the page when an ad-blocker is detected
var child = document.getElementsByClassName("tp-modal")[0];
var backDrop = document.getElementsByClassName("tp-backdrop")[0];
  
  //Check if the blocking elements were found, if so, delete them and break the loop
  if (child != null && backDrop != null) {
       parent.removeChild(child);
       parent.removeChild(backDrop);
       clearInterval(myInterval);
  }
  
}

//Set this function on a timed loop, running once every 2 seconds until it succeeds at removing the blocking elements. 
//The blocking elements are not added immediately, so the function is called once every 2 seconds until they do and can be removed.
myInterval = setInterval(removeAdBlockerBlocker, 2000);
