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
    console.log('works');//prints to browser console
    console.log(jsonData);
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
