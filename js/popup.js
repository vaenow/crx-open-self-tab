function setDOMInfo(skipRemove) {
  // var info = skipRemove ? '跳转'
  document.getElementById('check').innerHTML = "Hi~";
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function() {
  // var skipRemove = window.localStorage.get('skipRemove')
  // setDOMInfo(skipRemove)
  document.getElementById('check').addEventListener('click', parseImg);
});

function parseImg() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    setDOMInfo(tabs)
}