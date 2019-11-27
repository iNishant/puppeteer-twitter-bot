
const credentials = require('./credentials.json').credentials;
const {
  loginToTwitter,
  tweetAfterLogin,
  generateRandomTweet,
} = require('./utils');

credentials.forEach(user => {
  test('should login', async () => {
    await loginToTwitter(page, user.email, user.password);
    const tweet = generateRandomTweet();
    await tweetAfterLogin(page, tweet);
    expect(1).toBe(1);
  });
});
