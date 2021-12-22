package com.runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
	features="src/main/java/com/features",
	glue="com.stepdefination",
	format={"pretty","html:test-output"},
	tags="@loginpage",
	dryRun=false
)	
public class TestRunner {

}
