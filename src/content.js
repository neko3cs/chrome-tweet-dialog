'use strict';

const confirmTweet = (e) => {
  if (confirm('投稿します。よろしいですか？') === false) {
    e.stopPropagation();
  }
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

window.addEventListener('load', setConfirmToTweetButton);
