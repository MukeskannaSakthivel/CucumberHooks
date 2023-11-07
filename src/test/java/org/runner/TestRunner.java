package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utility.ReportUtils;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\FeatureFile", glue = "org.stepdef", dryRun = false, monochrome = true, plugin = {
		"pretty", "html:src\\test\\resources\\Reports", "json:src\\test\\resources\\Reports\\report.json",
		"junit:src\\test\\resources\\Reports\\fb.xml" })
public class TestRunner {

	@AfterClass
	public static void jvmReportGeneration() {

		ReportUtils.generateJvmReport(
				System.getProperty("user.dir") + "\\src\\test\\resources\\Reports\\report.json");
	}

}
