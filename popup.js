// // Wait for the popup to load fully
// document.addEventListener("DOMContentLoaded", function () {
//   // add a function to the button in the popup
//   document.querySelector("button").addEventListener("click", onclick, false);

//   // define the function when clicked
//   function onclick() {
//     // find active tab
//     chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//       // call the setCoutn function to send a message to the open tab
//       chrome.tabs.sendMessage(tabs[0].id, "hi", setCount);
//     });
//   }

//   function setCount(res) {
//     const div = document.createElement("div");
//     div.textContent = `${res.count} bears`;
//     document.body.appendChild(div);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const background = chrome.extension.getBackgroundPage();

  Object.keys(background.bears).forEach(function (url) {
    const div = document.createElement("div");
    div.textContent = `${url}: ${background.bears[url]}`;

    document.body.appendChild(div);
  });
});
