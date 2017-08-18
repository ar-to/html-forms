(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const oninput = require('./oninput')(),
  onchange = require('./onchange')();

},{"./onchange":2,"./oninput":3}],2:[function(require,module,exports){
const statusBar = require('./status_bar');

module.exports = function(){
  var inputElementChange = document.querySelector('#onChange');

  inputElementChange.addEventListener("change", updatePTagChange);

  function updatePTagChange() {
    var inputChangeEValue = inputElementChange.value,
      inputPtagChange = document.querySelector('#onChange-p');

      setTimeout(function(){
        statusBar();
        inputPtagChange.innerHTML = `This is the input value for the onchange event :: ${inputChangeEValue}`;
      }, 1000);
  }
}

},{"./status_bar":4}],3:[function(require,module,exports){

module.exports = function() {

  var inputElement = document.querySelector('#onInput');

  inputElement.addEventListener("input", updatePTag);

  function updatePTag() {
    var inputeEValue = inputElement.value,
      inputPtagChange = document.querySelector('#onInput-p');

    inputPtagChange.innerHTML = `This is the input value for the oninput event :: ${inputeEValue}`;
  }
}

},{}],4:[function(require,module,exports){

module.exports = function() {
  var status = document.querySelector('#status'),
    width = 1,
    interval = setInterval(runStatusBar, 10);

  function runStatusBar() {
    if (width <= 100) {
      status.removeAttribute('class');
      width++
      status.style.width = width + '%';
    } else {
      clearInterval(interval);
      status.setAttribute('class', 'status-fade');
    }
  }
}

},{}]},{},[1]);
