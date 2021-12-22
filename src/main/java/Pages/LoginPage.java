package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
	WebDriver driver;
	By txt_username = By.xpath("(//input[@name=\"email\"])[2]");
	By text_password= By.xpath("(//input[@name=\"pwd\"])[2]");
	By btn_login = By.xpath("//button[@id=\"ACCT_LOGIN_SUBMIT\"]");
	
	public LoginPage(WebDriver driver){
		this.driver=driver;
	}
	
	public void enterUsername(String username){
		driver.findElement(txt_username).sendKeys(username);
	}
	
	public void enterpassword(String password){
		driver.findElement(text_password).sendKeys(password);
	}
	
	public void clickLogin(){
		driver.findElement(btn_login).click();
	}

	
}
