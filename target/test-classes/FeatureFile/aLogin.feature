Feature: To validate login functionality

  Background: 
    Given user launch adactin application

  Scenario: To validate login using invalid username and invalid password
    When user enter username  and password
      | mukes5890 | mukes@5890 |
    And user click login button
    Then user see the results based on credential types

  Scenario: To validate login using valid username and valid password
    When user enter username  and password
      | vaithy2410 | vaithy@2410 |
    And user click login button
    Then user see the results based on credential types
