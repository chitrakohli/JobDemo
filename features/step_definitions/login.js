const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

Then(/^I click on the Sign in or Create Account Link$/, async () => {
  console.log("----------* Sign in * Test Pass----------");
  return (await World.driver.findElement(By.linkText('Sign in'))).click();
});