'use strict';

const confirmTweet = (e) => {
  if (confirm('投稿します。よろしいですか？') === false) {
    e.stopPropagation();
  }
};

let setIntervalId = 0;
const setConfirmToTweetButton = () => {
  const tweetButton = document.querySelector('div[data-testid="tweetButtonInline"]');
  if (tweetButton === null) {
    return;
  }
  tweetButton.addEventListener('click', confirmTweet, { capture: true });
  clearInterval(setIntervalId);
};

window.addEventListener('load', () => {
  setIntervalId = setInterval(setConfirmToTweetButton, 1000);
});
