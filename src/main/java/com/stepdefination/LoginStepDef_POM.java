package com.stepdefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Pages.LoginPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

public class LoginStepDef_POM {
	WebDriver driver;
	LoginPage login;
	
	
	@Before
	public void setUp(){
	  System.setProperty("webdriver.chrome.driver","chromedriver.exe");
	    driver=new ChromeDriver();
	}
	
	/* @After
	 public void tearDown(){
		 driver.close();
	 }
*/
@Given("^user should be on login page$")
public void user_should_be_on_login_page() throws Throwable {
	 driver.get("https://www.moneycontrol.com/news/automobile/do-tesla-employees-make-more-than-their-other-ev-industry-counterparts-7771041.html?utm_source=google&utm_medium=cpc&utm_campaign=ev_search_adclear&gclid=Cj0KCQiA8ICOBhDmARIsAEGI6o1q89n1Vcj8EIkEMrinZDeUgHS4bytMlVOYBOpKdLHukXoN0L8QhscaAqNrEALw_wcB");
	 driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	 driver.findElement(By.linkText("Hello, Login")).click();
	 driver.findElement(By.linkText("Log-in")).click();
	 Thread.sleep(5000);
	 //driver.switchTo().frame(0);
	 driver.switchTo().frame(driver.findElement(By.id("myframe")));
	 Thread.sleep(5000);
	// driver.findElement(By.xpath("//a[@id='ACCT_FB_LOGIN']")).click();
}

@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_and(String uname, String pass) throws Throwable {
	 login=new LoginPage(driver);
	
	login.enterUsername(uname);
	login.enterpassword(pass);
	
    
}

@When("^user clicks login button$")
public void user_clicks_login_button() throws Throwable {
	login.clickLogin();
	
}

@Then("^user should be on home page$")
public void user_should_be_on_home_page() throws Throwable {
	String Actual=driver.findElement(By.xpath("//span[@class='usr_nm']")).getText();
	 Assert.assertEquals(Actual, "Hi Snehal Gaikwad");
}
}