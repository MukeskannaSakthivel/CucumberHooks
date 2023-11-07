package org.stepdef;

import java.util.List;

import org.pageobject.SearchPageObject;
import org.utility.BaseClass;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.datatable.DataTable;

public class SearchAdactin extends BaseClass {

	public SearchPageObject a;

	@When("user not select the location and select the Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom")
	public void user_not_select_the_location_and_select_the_Hotels_RoomType_NoofRooms_CheckInDate_CheckOutDate_AdultsPerRoom_ChildPerRoom(
			DataTable d) {
		List<List<String>> li = d.asLists();
		a = new SearchPageObject();
		selByValue(a.getHotels(), li.get(0).get(0));
		selByValue(a.getRoomType(), li.get(1).get(1));
		selByValue(a.getNoOfRooms(), li.get(2).get(2));
		a.getChechkIn().clear();
		textPass(a.getChechkIn(), li.get(0).get(3));
		a.getCheckOut().clear();
		textPass(a.getCheckOut(), li.get(1).get(4));
		selByValue(a.getNoOfAdult(), li.get(2).get(5));
		selByValue(a.getNoOfChild(), li.get(1).get(6));
	}

	@When("user click the search button")
	public void user_click_the_search_button() {
		elementClick(a.getSearch());
	}

	@Then("user check the next page loaded")
	public void user_check_the_next_page_loaded() {

	}

	@When("user select the Location,Hotels,RoomType,NoofRooms,CheckInDate,CheckOutDate,AdultsPerRoom,ChildPerRoom")
	public void user_select_the_Location_Hotels_RoomType_NoofRooms_CheckInDate_CheckOutDate_AdultsPerRoom_ChildPerRoom(
			DataTable d) {
		List<List<String>> li = d.asLists();
		a = new SearchPageObject();
		selByValue(a.getLocation(), li.get(0).get(0));
		selByValue(a.getHotels(), li.get(1).get(1));
		selByValue(a.getRoomType(), li.get(2).get(2));
		selByValue(a.getNoOfRooms(), li.get(2).get(3));
		a.getChechkIn().clear();
		textPass(a.getChechkIn(), li.get(0).get(4));
		a.getCheckOut().clear();
		textPass(a.getCheckOut(), li.get(1).get(5));
		selByValue(a.getNoOfAdult(), li.get(2).get(6));
		selByValue(a.getNoOfChild(), li.get(1).get(7));
	}

}
