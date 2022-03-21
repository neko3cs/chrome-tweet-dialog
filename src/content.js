'use strict';

const confirmTweet = (e) => {
  if (confirm('投稿します。よろしいですか？') === false) {
    e.stopPropagation();
  }
  setConfirmToTweetButton();
};

const setConfirmToTweetButton = () => {
  let setIntervalId = 0;

  const innerMethod = () => {
    const tweetButton = document.querySelector('div[data-testid="tweetButtonInline"]');
    if (tweetButton === null) {
      return;
    }
    tweetButton.addEventListener('click', confirmTweet, { capture: true });
    clearInterval(setIntervalId);
  };

  setIntervalId = setInterval(innerMethod, 1000);
};

// FIXME: うまくCtrl+Enterを補足出来ていない
const setConfirmToCtrlEnter = () => {
  let setIntervalId = 0;

  const innerMethod = () => {
    const tweetTextArea = document.querySelector('div[data-testid="tweetTextarea_0"]');
    if (tweetTextArea === null) {
      return;
    }
    tweetTextArea.addEventListener('keypress', (event) => {
      if (event.keyCode === 13 && event.ctrlKey === true) {
        confirmTweet();
      }
    }, { capture: true });
    clearInterval(setIntervalId);
  };

  setIntervalId = setInterval(innerMethod, 1000);
}

window.addEventListener('load', setConfirmToTweetButton);
window.addEventListener('load', setConfirmToCtrlEnter);
