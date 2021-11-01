const confirmTweet = (e) => {
  if (confirm('投稿します。よろしいですか？') === false) {
    e.stopPropagation();
  }
};

const setConfirmToTweetButton = () => {
  const tweetButton = document.querySelector('div[data-testid="tweetButtonInline"]');
  if (tweetButton === null) {
    throw ('Can not get tweet button element!');
  }
  tweetButton.addEventListener('click', confirmTweet, {
    once: false,
    passive: true,
    capture: true
  });
};

window.addEventListener('load', setConfirmToTweetButton);
