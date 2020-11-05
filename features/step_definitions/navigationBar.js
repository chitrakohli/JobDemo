const { Given, Then } = require('cucumber');
const { By, Browser } = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  console.log("----------* Navigation Bar * Test Pass----------");
  return World.driver.findElement(By.id('primary-nav'));
});

Then(/^I click on the Find a job link on navigation bar$/, { timeout: 300 * 1000 }, async () => {
  console.log("----------* Find a job * link Test Pass----------");
  return (await World.driver.findElement(By.linkText('Find a job'))).click();
});

Then(/^I click on the job blogs link on navigation bar$/, async () => {
  console.log("----------* Job Blogs * Test Pass----------");
  return (await World.driver.findElement(By.linkText('Jobs blog'))).click();
});

Then(/^I click on the job alerts link on navigation bar$/, async () => {
  console.log("----------* Job Alerts * Test Pass----------");
  return (await World.driver.findElement(By.linkText('Job alerts'))).click();
});

