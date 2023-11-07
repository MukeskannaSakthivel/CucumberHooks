$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFile/aLogin.feature");
formatter.feature({
  "name": "To validate login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch adactin application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdactin.user_launch_adactin_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using invalid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter username  and password",
  "rows": [
    {
      "cells": [
        "mukes5890",
        "mukes@5890"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginAdactin.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the results based on credential types",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdactin.user_see_the_results_based_on_credential_types()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch adactin application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdactin.user_launch_adactin_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using valid username and valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter username  and password",
  "rows": [
    {
      "cells": [
        "vaithy2410",
        "vaithy@2410"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginAdactin.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the results based on credential types",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdactin.user_see_the_results_based_on_credential_types()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFile/bSearchHotel.feature");
formatter.feature({
  "name": "To validate search hotel functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch adactin application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdactin.user_launch_adactin_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username  and password",
  "rows": [
    {
      "cells": [
        "vaithy2410",
        "vaithy@2410"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate search by without passing all required fields",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user not select the location and select the Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom",
  "rows": [
    {
      "cells": [
        "Hotel Hervey",
        "Deluxe",
        "2",
        "24/09/2023",
        "30/09/2023",
        "3",
        "1"
      ]
    },
    {
      "cells": [
        "Hotel Creek",
        "Standard",
        "3",
        "26/09/2023",
        "01/10/2023",
        "4",
        "0"
      ]
    },
    {
      "cells": [
        "Hotel Sunshine",
        "Super Deluxe",
        "10",
        "02/10/2023",
        "14/10/2023",
        "2",
        "2"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SearchAdactin.user_not_select_the_location_and_select_the_Hotels_RoomType_NoofRooms_CheckInDate_CheckOutDate_AdultsPerRoom_ChildPerRoom(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchAdactin.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check the next page loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchAdactin.user_check_the_next_page_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch adactin application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdactin.user_launch_adactin_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username  and password",
  "rows": [
    {
      "cells": [
        "vaithy2410",
        "vaithy@2410"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate search by  passing all required fields",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user select the Location,Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom",
  "rows": [
    {
      "cells": [
        "London",
        "Hotel Hervey",
        "Deluxe",
        "2",
        "24/09/2023",
        "30/09/2023",
        "3",
        "1"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3",
        "26/09/2023",
        "01/10/2023",
        "4",
        "0"
      ]
    },
    {
      "cells": [
        "Paris",
        "Hotel Sunshine",
        "Super Deluxe",
        "10",
        "02/10/2023",
        "14/10/2023",
        "2",
        "2"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SearchAdactin.user_select_the_Location_Hotels_RoomType_NoofRooms_CheckInDate_CheckOutDate_AdultsPerRoom_ChildPerRoom(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchAdactin.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check the next page loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchAdactin.user_check_the_next_page_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFile/cSelectHotel.feature");
formatter.feature({
  "name": "To validate select hotel functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate select hotel functionality by selecting a hotel",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch adactin application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdactin.user_launch_adactin_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username  and password",
  "rows": [
    {
      "cells": [
        "vaithy2410",
        "vaithy@2410"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the Location,Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom",
  "rows": [
    {
      "cells": [
        "London",
        "Hotel Hervey",
        "Deluxe",
        "2",
        "24/09/2023",
        "30/09/2023",
        "3",
        "1"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3",
        "26/09/2023",
        "01/10/2023",
        "4",
        "0"
      ]
    },
    {
      "cells": [
        "Paris",
        "Hotel Sunshine",
        "Super Deluxe",
        "10",
        "02/10/2023",
        "14/10/2023",
        "2",
        "2"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchAdactin.user_select_the_Location_Hotels_RoomType_NoofRooms_CheckInDate_CheckOutDate_AdultsPerRoom_ChildPerRoom(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchAdactin.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select a hotel",
  "keyword": "When "
});
formatter.match({
  "location": "SelectHotelAdactin.user_select_a_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "SelectHotelAdactin.user_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectHotelAdactin.user_see_the_payment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFile/dPayment.feature");
formatter.feature({
  "name": "To validate payment functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Payment"
    }
  ]
});
formatter.scenario({
  "name": "To validate payment functionality by passing all details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Payment"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch adactin application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAdactin.user_launch_adactin_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username  and password",
  "rows": [
    {
      "cells": [
        "vaithy2410",
        "vaithy@2410"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAdactin.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the Location,Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom",
  "rows": [
    {
      "cells": [
        "London",
        "Hotel Hervey",
        "Deluxe",
        "2",
        "24/09/2023",
        "30/09/2023",
        "3",
        "1"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3",
        "26/09/2023",
        "01/10/2023",
        "4",
        "0"
      ]
    },
    {
      "cells": [
        "Paris",
        "Hotel Sunshine",
        "Super Deluxe",
        "10",
        "02/10/2023",
        "14/10/2023",
        "2",
        "2"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchAdactin.user_select_the_Location_Hotels_RoomType_NoofRooms_CheckInDate_CheckOutDate_AdultsPerRoom_ChildPerRoom(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchAdactin.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select a hotel",
  "keyword": "And "
});
formatter.match({
  "location": "SelectHotelAdactin.user_select_a_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "SelectHotelAdactin.user_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter firstname,lastname,address,creditCardnumber",
  "rows": [
    {
      "cells": [
        "firstname",
        "Ravi"
      ]
    },
    {
      "cells": [
        "lastname",
        "Kumar"
      ]
    },
    {
      "cells": [
        "address",
        "Erode"
      ]
    },
    {
      "cells": [
        "creditCardnumber",
        "9862198642169867"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "PaymentAdactin.user_enter_firstname_lastname_address_creditCardnumber(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select creditCardtype,expMonth,expYear",
  "rows": [
    {
      "cells": [
        "creditCardtype",
        "expMonth",
        "expYear"
      ]
    },
    {
      "cells": [
        "VISA",
        "3",
        "2024"
      ]
    },
    {
      "cells": [
        "MAST",
        "7",
        "2026"
      ]
    },
    {
      "cells": [
        "OTHR",
        "10",
        "2029"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaymentAdactin.user_select_creditCardtype_expMonth_expYear(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter cvv",
  "rows": [
    {
      "cells": [
        "cvv",
        "123"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaymentAdactin.user_enter_cvv(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click booknow",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentAdactin.user_click_booknow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the order number generated",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentAdactin.user_see_the_order_number_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});