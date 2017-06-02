// Inform the background page that 
// this tab should have a page-action
// chrome.runtime.sendMessage({
//   from:    'content',
//   subject: 'showPageAction'
// });

// // Listen for messages from the popup
// chrome.runtime.onMessage.addListener(function (msg, sender, response) {
//   debugger;
//   // First, validate the message's structure
//   if ((msg.from === 'popup') && (msg.subject === 'parseImg')) {
    
//     var msgResp = {};
//     var url = window.location.href;

//     if( url == "data:text/html,chromewebdata") {
//         url = loadTimeData.data_.summary.failedUrl;
//     }

//     msgResp.url = url.replace(/(\.com)/, '$1:'+3000);
//     msgResp.info = 'Redirecting..'

//     response(JSON.stringify(msgResp));
//   }
// });

// var skipRemove = window.localStorage.getItem('skipRemove')
// if (!skipRemove) {
  console.log("Clear all a's target")
  setInterval(function() {
    document.querySelectorAll('a').forEach(function(tagA){tagA.removeAttribute('target')})
  }, 50)
// }
