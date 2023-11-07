package org.stepdef;

import org.pageobject.SelectPageObject;
import org.utility.BaseClass;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SelectHotelAdactin extends BaseClass {

	public SelectPageObject a;

	@When("user select a hotel")
	public void user_select_a_hotel() {
		a = new SelectPageObject();
		elementClick(a.getRadioBtn());
	}

	@When("user click the continue button")
	public void user_click_the_continue_button() {

		elementClick(a.getCont());
	}

	@Then("user see the payment page")
	public void user_see_the_payment_page() {

	}

}
