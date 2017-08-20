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
