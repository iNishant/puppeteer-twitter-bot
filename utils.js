const faker = require('faker');

const waitForPageChange = async (page) => {
  await page.waitForNavigation({ timeout: 120000 });
}

const click = async (page, selector) => {
  await page.waitForSelector(selector);
  await page.click(selector);
};

const open = async (page, url) => {
  await page.goto(url);
};

const generateRandomTweet = () => {
  return faker.lorem.paragraph().substring(0, 280);
};

const typeText = async (page, selector, text) => {
  await page.waitForSelector(selector);
  await page.type(selector, text);
};

const focus = async (page, selector) => {
  await page.waitForSelector(selector);
  await page.focus(selector);
};

const loginToTwitter = async (page, email, password) => {
  await open(page, 'https://twitter.com');
  await typeText(page, 'input[name=session\\5busername_or_email\\5d]', email);
  await typeText(page, 'input[name=session\\5bpassword\\5d]', password);
  await click(page, 'input[type=submit]');
  await waitForPageChange(page);
  console.log(`Logged in successfully to: ${email}`);
};


const tweetAfterLogin = async (page, tweet) => {
  await open(page, 'https://twitter.com/compose/tweet');
  await focus(page, '.public-DraftEditor-content');
  await page.keyboard.type(tweet);
  await click(page, 'div[data-testid=tweetButton]');
  await waitForPageChange(page);
  console.log(`Tweeted successfully`);
};

module.exports = {
  loginToTwitter,
  tweetAfterLogin,
  generateRandomTweet,
};