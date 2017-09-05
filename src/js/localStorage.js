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
