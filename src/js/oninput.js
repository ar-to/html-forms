
module.exports = function() {

  var inputElement = document.querySelector('#onInput');

  inputElement.addEventListener("input", updatePTag);

  function updatePTag() {
    var inputeEValue = inputElement.value,
      inputPtagChange = document.querySelector('#onInput-p');

    inputPtagChange.innerHTML = `This is the input value for the oninput event :: ${inputeEValue}`;
  }
}
