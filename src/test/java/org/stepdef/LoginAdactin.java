package org.stepdef;

import java.util.List;

import org.pageobject.LoginPageObject;
import org.utility.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.datatable.DataTable;

public class LoginAdactin extends BaseClass {

	public LoginPageObject a;

	@Given("user launch adactin application")
	public void user_launch_adactin_application() {
		url("http://adactinhotelapp.com/");
	}

	@When("user enter username  and password")
	public void user_enter_username_and_password(DataTable d) {
		a = new LoginPageObject();
		List<String> list = d.asList();
		textPass(a.getUsername(), list.get(0));
		textPass(a.getPassword(), list.get(1));
	}

	@When("user click login button")
	public void user_click_login_button() {
		elementClick(a.getLoginBtn());
	}

	@Then("user see the results based on credential types")
	public void user_see_the_results_based_on_credential_types() {

	}

}
