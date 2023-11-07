
Feature: To validate search hotel functionality

  Background: 
    Given user launch adactin application
    And user enter username  and password
      | vaithy2410 | vaithy@2410 |
    And user click login button

  Scenario: To validate search by without passing all required fields
    When user not select the location and select the Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom
      | Hotel Hervey   | Deluxe       |  2 | 24/09/2023 | 30/09/2023 | 3 | 1 |
      | Hotel Creek    | Standard     |  3 | 26/09/2023 | 01/10/2023 | 4 | 0 |
      | Hotel Sunshine | Super Deluxe | 10 | 02/10/2023 | 14/10/2023 | 2 | 2 |
    And user click the search button
    Then user check the next page loaded

  Scenario: To validate search by  passing all required fields
    When user select the Location,Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom
      | London | Hotel Hervey   | Deluxe       |  2 | 24/09/2023 | 30/09/2023 | 3 | 1 |
      | Sydney | Hotel Creek    | Standard     |  3 | 26/09/2023 | 01/10/2023 | 4 | 0 |
      | Paris  | Hotel Sunshine | Super Deluxe | 10 | 02/10/2023 | 14/10/2023 | 2 | 2 |
    And user click the search button
    Then user check the next page loaded

    