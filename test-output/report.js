$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 3,
  "name": "Mony control application test",
  "description": "",
  "id": "mony-control-application-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@loginpage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "login test",
  "description": "",
  "id": "mony-control-application-test;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "mony-control-application-test;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 15,
      "id": "mony-control-application-test;login-test;;1"
    },
    {
      "cells": [
        "snehalgaikwad2214@gmail.com",
        "Snehal@22",
        ""
      ],
      "line": 16,
      "id": "mony-control-application-test;login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2519877800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "login test",
  "description": "",
  "id": "mony-control-application-test;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    },
    {
      "line": 2,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters \"snehalgaikwad2214@gmail.com\" and \"Snehal@22\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef_POM.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 51919073000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "snehalgaikwad2214@gmail.com",
      "offset": 13
    },
    {
      "val": "Snehal@22",
      "offset": 47
    }
  ],
  "location": "LoginStepDef_POM.user_enters_and(String,String)"
});
formatter.result({
  "duration": 457266900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef_POM.user_clicks_login_button()"
});
formatter.result({
  "duration": 283700000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef_POM.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 5175356300,
  "status": "passed"
});
});27Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\RAKESH\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 36869f3d2ffc3a87f1083a1234823e83\n*** Element info: {Using\u003dxpath, value\u003d(//input[@name\u003d\"email\"])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat Pages.LoginPage.enterUsername(LoginPage.java:17)\r\n\tat com.stepdefination.LoginStepDef_POM.user_enters_and(LoginStepDef_POM.java:55)\r\n\tat ✽.When user enters \"snehalgaikwad2214@gmail.com\" and \"Snehal@22\"(login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef_POM.user_clicks_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef_POM.user_should_be_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
});