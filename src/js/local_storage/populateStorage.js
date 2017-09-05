'use strict';
module.exports = {
  element : document.querySelector('#form-one #name'),//get element
  add : function() {
      let inputForm1Value = document.querySelector('#form-one #name');//get element

      localStorage.setItem('inputValueForm1Storage', inputForm1Value.value);//create storage to element.value
  }
};
