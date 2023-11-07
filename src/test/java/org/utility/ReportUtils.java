package org.utility;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class ReportUtils {

	/*
	 * this method is to generate jvm reports which accepts string argument defining
	 * json file path
	 */

	public static void generateJvmReport(String jsonFilePath) {

		// 1.Mention target Folder

		File jvmTargetFolder = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\Reports\\JVMReport");

		// 2.Add details to your report using Configuration class

		Configuration jvmFileConfigurations = new Configuration(jvmTargetFolder, "Adactin Web App Automation");

		jvmFileConfigurations.addClassifications("Platform Name ", "Windows 10");
		jvmFileConfigurations.addClassifications("Build Url", "http://adactinhotelapp.com/");
		jvmFileConfigurations.addClassifications("Browser Name ", "Microsoft Edge");
		jvmFileConfigurations.addClassifications("Browser Version", "3.14");
		jvmFileConfigurations.addClassifications("Sprint", "14");

		// 3.Convert String into List<String>

		List<String> jsonListFiles = new ArrayList<String>();

		jsonListFiles.add(jsonFilePath);

		// 4.Create object for ReportBuilder class and call generateReports() method

		ReportBuilder r = new ReportBuilder(jsonListFiles, jvmFileConfigurations);
		r.generateReports();
	}

}
