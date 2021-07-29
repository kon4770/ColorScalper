let title = document.getElementsByTagName("h1");
let ulEl = document.getElementById("ul-el");
title = title[0];
sendRequest();

function sendRequest() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let contain = tabs[0].url;
    title.textContent = contain;
    console.log(getComputedStyle(title));
    let msg = { colors: [] };
    chrome.tabs.sendMessage(tabs[0].id, msg, function (response) {
      for (elm of response) {
        ulEl.innerHTML += `<li style="display:block;background-color:${elm};"> ${elm} </li>`
      }
    });
  });
}
