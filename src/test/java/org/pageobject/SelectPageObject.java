package org.pageobject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class SelectPageObject extends BaseClass {

	public SelectPageObject() {

		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "radiobutton_0")
	private WebElement radioBtn;

	@FindBy(id = "continue")
	private WebElement cont;

	public WebElement getRadioBtn() {
		return radioBtn;
	}

	public WebElement getCont() {
		return cont;
	}

}
