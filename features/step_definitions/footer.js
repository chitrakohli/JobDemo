const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

Then(/^I click on the About us Link$/, async () => {
  console.log("----------* About Us - Footer * Test Pass----------");
  return (await World.driver.findElement(By.linkText('About Us'))).click();
});

Then(/^I click on the Contact Us Link$/, async () => {
  console.log("----------* Contact Us - Footer * Test Pass----------");
  return (await World.driver.findElement(By.linkText('Contact Us'))).click();
});

Then(/^I click on the Terms & Conditions Link$/, async () => {
  console.log("----------* Terms & Conditions - Footer * Test Pass----------");
  return (await World.driver.findElement(By.linkText('Terms & Conditions'))).click();
});

Then(/^I click on the Privacy Policy Link$/, async () => {
  console.log("----------* Privacy Policy - Footer * Test Pass----------");
  return (await World.driver.findElement(By.linkText('Privacy Policy'))).click();
});

Then(/^I click on the Advertise with us$/, async () => {
  console.log("----------* Advertise with us - Footer * Test Pass----------");
  return (await World.driver.findElement(By.linkText('Advertise with us'))).click();
});
