const { Builder, By } = require('selenium-webdriver');
const { Options } = require("selenium-webdriver/chrome");

require("chromedriver");

(async function() {
    //readProductsFile();
    const options = new Options();
    // await options.addArguments("user-data-dir=C:\\Users\\otavio.capel.garcia\\AppData\\Local\\Google\\Chrome\\User Data")
    // await options.addArguments("profile-directory=Default");
    
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build()
    

    await driver.get('https://www.mercadolivre.com.br/');

    const searchInput = await driver.findElement(By.className('nav-search-input'));
    const searchButton = await driver.findElement(By.className('nav-icon-search'));

    await searchInput.sendKeys('shape sk8mafia')
    await searchButton.click();

})();

function readProductsFile() {
    const x = XLSX.readFile('produtos.xlsx');
    console.log(x)
}