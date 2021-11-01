const confirmTweet = (e) => {
  if (confirm('投稿します。よろしいですか？') === false) {
    e.stopPropagation();
  }
};

const setAlertToTweetButton = () => {
  // TODO: なんか見つからない時があるので取り方を考える
  const tweetButton = document.querySelector('div[data-testid="tweetButtonInline"]');
  if (tweetButton) {
    console.log('ボタン見つけた！ダイアログを埋め込むね！');
    tweetButton.addEventListener('click', confirmTweet, { capture: true });
  } else {
    console.log('ボタン見つからなかった！');
  }
};

const onLoad = () => {
  setAlertToTweetButton();
};

window.addEventListener('load', onLoad);
