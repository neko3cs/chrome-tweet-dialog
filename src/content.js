const confirmTweet = (e) => {
  if (confirm('投稿します。よろしいですか？') === false) {
    e.stopPropagation();
  }
  setDialogToTweetButton();  // TODO: 何故か再設定されない->直す
};

const setDialogToTweetButton = () => {
  // TODO: なんか見つからない時があるので取り方を考える
  const tweetButton = document.querySelector('div[data-testid="tweetButtonInline"]');
  if (tweetButton === null) {
    throw ('Can not get tweet button element!');
  }
  tweetButton.addEventListener('click', confirmTweet, { capture: true });
};

const onLoad = () => {
  setDialogToTweetButton();
};

window.addEventListener('load', onLoad);
