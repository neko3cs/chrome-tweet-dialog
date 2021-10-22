function showAlert() {
  alert("Hello World!");
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executionScript({
    target: { tabId: tab.id },
    function: showAlert
  });
});
