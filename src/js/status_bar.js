
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
