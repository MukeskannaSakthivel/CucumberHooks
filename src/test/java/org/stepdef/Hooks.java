package org.stepdef;

import org.utility.BaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass{

	@Before
	public void browserSetup() {
		
		launchEdge();
		windowMaxi();
		
	}
	
	@After
	public void afterScenario(Scenario scenario) {
		String  scenarioName = scenario.getName();
		captureScreenshot(scenarioName);
		closeBrowser();
	}
}
