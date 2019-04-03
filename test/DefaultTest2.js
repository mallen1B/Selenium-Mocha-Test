const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('DefaultTest2', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should login to the demo site', async () => {
        await driver.get('http://thedemosite.co.uk/addauser.php'); 
        await driver.sleep(2000);
        await driver.findElement(By.name('username')).sendKeys('webdriver');
        await driver.findElement(By.name('password')).sendKeys('test2');
        await driver.findElement(By.name('FormsButton2')).click();
        const title = await driver.getTitle();

        expect(title).to.equal('Add a user - FREE PHP code and SQL');
    });

    after(async () => driver.quit());
});