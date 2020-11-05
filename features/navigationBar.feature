Feature: Jobs page

  Background: The user clicks on the navigation Bar links
    Given I go to the jobs page

  Scenario: Navigation bar renders for Find a job
    And I should see the navigation bar
    And I click on the Find a job link on navigation bar
    
  Scenario: Navigation bar renders for job alerts
    Then I should see the navigation bar
    And I click on the job alerts link on navigation bar

  Scenario: Navigation bar renders for job blogs
    Then I should see the navigation bar
    And I click on the job blogs link on navigation bar