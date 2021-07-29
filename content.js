chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  let elements = document.getElementsByTagName("*");
  for (elt of elements) {
    let style = getComputedStyle(elt);
    if (!message.colors.includes(style.color)) {
      message.colors.push(style.color);
    }
    if (!message.colors.includes(style.backgroundColor)) {
      message.colors.push(style.backgroundColor);
    }
  }
  sendResponse(message.colors);
}
