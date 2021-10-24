const showAlert = () => {
  if (document.URL.match("twitter.com")) {
    alert("この拡張機能はこのサイトで使えます。");
  } else {
    alert("この拡張機能はこのサイトで使えません。");
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showAlert
  });
});
