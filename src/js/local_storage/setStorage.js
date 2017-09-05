const populateStorage = require('./populateStorage');

module.exports = function() {
  //let inputForm1Value = document.querySelector('#form-one #name');
  let currentValue = localStorage.getItem('inputValueForm1Storage');

  populateStorage.element.value = currentValue;//element value = stored value
}
