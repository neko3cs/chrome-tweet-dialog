const confirmTweet = (e) => {
  if (confirm('投稿します。よろしいですか？') === false) {
    e.stopPropagation();
  }
};

const setAlertToTweetButton = () => {
  const tweetButton = document.querySelector('div[data-testid="tweetButtonInline"]');
  if (tweetButton) {
    console.log('ボタン見つけた！ダイアログを埋め込むね！');
    tweetButton.addEventListener('click', confirmTweet, { capture: true });
  } else {
    console.log('ボタン見つからなかった！');
  }
};

const setAlertToAlertButton = () => {
  const alertButton = document.querySelector('button#alertButton');
  if (alertButton) {
    console.log('ボタン見つけた！ダイアログを埋め込むね！');
    alertButton.addEventListener('click', confirmTweet, { capture: true });
  } else {
    console.log('ボタン見つからなかった！');
  }
};

const onLoad = () => {
  setAlertToTweetButton();
  // setAlertToAlertButton();
};

window.addEventListener('load', onLoad);
