@Payment
Feature: To validate payment functionality

  Scenario: To validate payment functionality by passing all details
    Given user launch adactin application
    And user enter username  and password
      | vaithy2410 | vaithy@2410 |
    And user click login button
    And user select the Location,Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom
      | London | Hotel Hervey   | Deluxe       |  2 | 24/09/2023 | 30/09/2023 | 3 | 1 |
      | Sydney | Hotel Creek    | Standard     |  3 | 26/09/2023 | 01/10/2023 | 4 | 0 |
      | Paris  | Hotel Sunshine | Super Deluxe | 10 | 02/10/2023 | 14/10/2023 | 2 | 2 |
    And user click the search button
    And user select a hotel
    And user click the continue button
    When user enter firstname,lastname,address,creditCardnumber
      | firstname        | Ravi             |
      | lastname         | Kumar            |
      | address          | Erode            |
      | creditCardnumber | 9862198642169867 |
    And user select creditCardtype,expMonth,expYear
      | creditCardtype | expMonth | expYear |
      | VISA           |        3 |    2024 |
      | MAST           |        7 |    2026 |
      | OTHR           |       10 |    2029 |
    And user enter cvv
      | cvv | 123 |
    And user click booknow
    Then user see the order number generated
