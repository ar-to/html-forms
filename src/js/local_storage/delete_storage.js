
module.exports = {
  removeSingle : function(keyname) {
    localStorage.removeItem(keyname);
    console.log('remove single keyvalue');
  }
}
