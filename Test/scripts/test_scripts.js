// var webdriver = require('selenium-webdriver'),
//     chrome = require('selenium-webdriver/chrome'),
//     firefox = require('selenium-webdriver/firefox');
//
// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .setFirefoxOptions(/* ... */)
//     .build();

var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    driver.get('http://localhost:8887');
    driver.findElement(By.id('exampleInputName1')).sendKeys("Test Name");
    driver.findElement(By.id('exampleInputEmail1')).sendKeys("testName@ftc-llc.com");
    var button = driver.findElement(By.id('submitButton')).click();
