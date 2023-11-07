package org.pageobject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class SearchPageObject extends BaseClass{

	
	public SearchPageObject() {
		
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(name="location")
	private WebElement location;
	
	@FindBy(id="hotels")
	private WebElement hotels;
	
	@FindBy(id="room_type")
	private WebElement roomType;
	
	@FindBy(id="room_nos")
	private WebElement noOfRooms;
	
	@FindBy(id="datepick_in")
	private WebElement chechkIn;
	
	@FindBy(id="datepick_out")
	private WebElement checkOut;
	
	@FindBy(id="adult_room")
	private WebElement noOfAdult;
	
	@FindBy(id="child_room")
	private WebElement noOfChild;
	
	@FindBy(id="Submit")
	private WebElement search;

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getNoOfRooms() {
		return noOfRooms;
	}

	public WebElement getChechkIn() {
		return chechkIn;
	}

	public WebElement getCheckOut() {
		return checkOut;
	}

	public WebElement getNoOfAdult() {
		return noOfAdult;
	}

	public WebElement getNoOfChild() {
		return noOfChild;
	}

	public WebElement getSearch() {
		return search;
	}
	
	
}