# The Economist - Job Portal Automation

# The Problme Statement
To automate the Job Portal ( https://jobs.economist.com/ ) for The Economist and test the vital features to ensure it is working well.

## Tech Stack and VCS
The following technologies were used:
 - Visual Studio 
 - GitHub
 - NodeJS/JavaScript
 - Cucumber
 - Selenium-Webdriver
 - Chromedriver

## The Scenario and features covered 
The following are the covered tests :
1.) Functional Links on the Navigation Bar
        - Find a job
        - job blogs
        - job alerts
2.) Functional Links on the footer
        - About Us
        - Contact Us
        - Terms & Conditions
        - Privacy Policy
        - Advertise with us
3.) Clicking on the Sign In or Create Account Link

## Implementation Advancement for future 
- Protractor can be used for the above website as it uses typescript - an advanced version of Javascript.
- A commonMethods file can be created which can contain all the (Selenium) IDs and methods like "scroll By" and " wait "etc. that are common to all.
- Logging for errors and Reports can be initiated.
- Taking screenshots of the errors while a test failure.
- Using a Build Tool to contain the Suite.
- Add few test scripts in package.json that are used frequently like-"test": "npm run build && npm run start".
- "Chai" a BDD assertion library can be used for verification. 

## Running the tests
To get the tests running, ensure that you have `NodeJS`, `npm`, `Google Chrome` and `Java` installed. Then run the following commands to start the tests:
1. `npm install`
2. `npm run test`
The basic setup has been done for you, with the web browser restarting at the beginning of each test scenario.

