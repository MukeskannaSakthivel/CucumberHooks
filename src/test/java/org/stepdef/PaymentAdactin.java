package org.stepdef;

import java.util.List;
import java.util.Map;

import org.pageobject.PaymentPageObject;
import org.utility.BaseClass;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.datatable.DataTable;

public class PaymentAdactin extends BaseClass {
	public PaymentPageObject a;

	@When("user enter firstname,lastname,address,creditCardnumber")
	public void user_enter_firstname_lastname_address_creditCardnumber(DataTable d) {
		a = new PaymentPageObject();
		Map<String, String> map = d.asMap(String.class, String.class);
		textPass(a.getFirstName(), map.get("firstname"));
		textPass(a.getLastName(), map.get("lastname"));
		textPass(a.getAddress(), map.get("address"));
		textPass(a.getCardNumber(), map.get("creditCardnumber"));
	}

	@When("user select creditCardtype,expMonth,expYear")
	public void user_select_creditCardtype_expMonth_expYear(DataTable d) {
		List<Map<String, String>> m = d.asMaps();
		selByValue(a.getCardType(), m.get(1).get("creditCardtype"));
		selByValue(a.getMonth(), m.get(0).get("expMonth"));
		selByValue(a.getYear(), m.get(2).get("expYear"));
	}

	@When("user enter cvv")
	public void user_enter_cvv(DataTable d) {
		Map<String, String> m = d.asMap(String.class, String.class);
		textPass(a.getCvv(), m.get("cvv"));
	}

	@When("user click booknow")
	public void user_click_booknow() {
		elementClick(a.getBookNow());
	}

	@Then("user see the order number generated")
	public void user_see_the_order_number_generated() {

	}

}
