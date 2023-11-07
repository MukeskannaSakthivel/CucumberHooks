package org.pageobject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class LoginPageObject extends BaseClass {

	public LoginPageObject() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(name = "username")
	private WebElement username;

	@FindBy(name = "password")
	private WebElement password;

	@FindBy(name = "login")
	private WebElement loginBtn;

	@FindBy(xpath = "//td[text()='Welcome to Adactin Group of Hotels']")
	private WebElement welcomeText;

	@FindBy(xpath = "//b[text()='Invalid Login details or Your Password might have expired. ']")
	private WebElement errorMsg;

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}

	public WebElement getWelcomeText() {
		return welcomeText;
	}

	public WebElement getErrorMsg() {
		return errorMsg;
	}

}
