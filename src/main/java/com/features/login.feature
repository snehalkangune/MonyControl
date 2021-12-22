
@loginpage
Feature: Mony control application test
  

 @login
 Scenario Outline: login test
 
 Given user should be on login page
 When user enters "<uname>" and "<pass>"
 And user clicks login button
 Then user should be on home page
 
 Examples: 
|uname|pass|
|snehalgaikwad2214@gmail.com|Snehal@22||
 
