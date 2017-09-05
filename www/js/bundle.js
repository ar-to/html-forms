(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const statusBar = require('./status_bar');

module.exports = function() {

  function init(){
    //on change event
    document.querySelector('#name').addEventListener('change', onChangeHandler);
    //evoke ajax handler
    $('#submitButton').click(submitButtonHandler);
  };

  function onChangeHandler(event) {//ajax handler
    event.preventDefault();//prevent form submission
    event.stopPropagation();
    const formOne = document.querySelector('#form-one');

    //XMLHttpRequest - ajax post request
    //or ajax request via jquery
    $.ajax({
      url : '/form',
      type : 'POST',
      data : {
        inputName : formOne.name.value
      },
      success : successHandler
    });
    //send data to server
    //when successful sent print data to browser element
  }

  function submitButtonHandler (evt) {
     var testForm = document.getElementById('testForm');

      //prevent form submission
      evt.preventDefault();
      evt.stopPropagation();

      //make the AJAX call
      $.ajax({
        url: '/form2',
        type: 'POST',
        data: {
          firstName: testForm.firstName.value,
          lastName: testForm.lastName.value
        },
        success: successHandler
      });
  }

  //function to print data to browser
  function successHandler(jsonData) {
    console.log('ajax post success handler works!');//prints to browser console
    console.log(`ajax post jsonData:` + JSON.stringify(jsonData));
    const formDataRaw = document.querySelector('#form-data-raw'),
      formData = document.querySelector('#form-data'),
      formData2 = document.querySelector('#form-data2'),
      jsonString = JSON.stringify(jsonData);

    setTimeout(function(){
      statusBar();//invokes status bar
      formDataRaw.innerHTML = `This is the form input values as raw data: ${jsonData}`;
      formData.innerHTML = `This is the form input value as JSON string: ${jsonString}`;

      var x,
      txt = '';
      for (x in jsonData) {
        txt += jsonData[x] + ' ';//parameter parameter
      }
      formData2.innerHTML = `This data uses a JS for/in loop : ${txt}`;
    }, 1000);
  }

  document.addEventListener("DOMContentLoaded", function(event){//evokes on change event on page ready
    init();
  })
};

},{"./status_bar":10}],2:[function(require,module,exports){
const populateStorage = require('./local_storage/populateStorage'),
  setStorage = require('./local_storage/setStorage'),
  deleteStorage = require('./local_storage/delete_storage'),
  varObj = require('./local_storage/varObj');

module.exports = function() {

//store default markup value to localStorage and check
  if(localStorage.getItem('inputValueForm1Storage')) {//if theres a value stored = true
    setStorage();//gets value stored and makes it equal the element.value
    console.log('add storage value to form1 input');
  } else {//if no value was stored
    //populateStorage.add();//set element.value to storage value
    populateStorage.add();
    console.log('store input value the first time browser loaded');
  }

populateStorage.element.onchange = populateStorage.add;
varObj.Form1DeleteStorageValueElement.onclick = function(e) {console.log(e)}
varObj.Form1DeleteStorageValueElement.onclick = function(e) {deleteStorage.removeSingle('inputValueForm1Storage');}
//console.log(populateStorage.element);
};

},{"./local_storage/delete_storage":3,"./local_storage/populateStorage":4,"./local_storage/setStorage":5,"./local_storage/varObj":6}],3:[function(require,module,exports){

module.exports = {
  removeSingle : function(keyname) {
    localStorage.removeItem(keyname);
    console.log('remove single keyvalue');
  }
}

},{}],4:[function(require,module,exports){
'use strict';
module.exports = {
  element : document.querySelector('#form-one #name'),//get element
  add : function() {
      let inputForm1Value = document.querySelector('#form-one #name');//get element

      localStorage.setItem('inputValueForm1Storage', inputForm1Value.value);//create storage to element.value
  }
};

},{}],5:[function(require,module,exports){
const populateStorage = require('./populateStorage');

module.exports = function() {
  //let inputForm1Value = document.querySelector('#form-one #name');
  let currentValue = localStorage.getItem('inputValueForm1Storage');

  populateStorage.element.value = currentValue;//element value = stored value
}

},{"./populateStorage":4}],6:[function(require,module,exports){

module.exports = {
  inputForm1Element : document.querySelector('#form-one #name'),
  Form1DeleteStorageValueElement : document.querySelector('#form1DeleteStorageValue')
}

},{}],7:[function(require,module,exports){
const oninput = require('./oninput')(),
  onchange = require('./onchange')(),
  formOne = require('./form-one-handler')(),
  localStorage = require('./localStorage')();

},{"./form-one-handler":1,"./localStorage":2,"./onchange":8,"./oninput":9}],8:[function(require,module,exports){
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

},{"./status_bar":10}],9:[function(require,module,exports){

module.exports = function() {

  var inputElement = document.querySelector('#onInput');

  inputElement.addEventListener("input", updatePTag);

  function updatePTag() {
    var inputeEValue = inputElement.value,
      inputPtagChange = document.querySelector('#onInput-p');

    inputPtagChange.innerHTML = `This is the input value for the oninput event :: ${inputeEValue}`;
  }
}

},{}],10:[function(require,module,exports){

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

},{}]},{},[7]);
