const confirmTweet = () => {
  confirm('投稿します。よろしいですか？');
};

const div = document.querySelector('div[data-testid="tweetButtonInline"]');
if (div) {
  div.addEventListener('click', confirmTweet);
}
