const confirmTweet = () => {
  return confirm('投稿します。よろしいですか？');
};

const onLoad = () => {
  const tweetButton = document.querySelector('div[data-testid="tweetButtonInline"]');
  if (tweetButton) {
    console.log('ボタン見つけた！ダイアログを埋め込むね！');
    tweetButton.addEventListener('click', confirmTweet);
  } else {
    console.log('ボタン見つからなかった！');
  }
};

window.addEventListener('load', onLoad);
