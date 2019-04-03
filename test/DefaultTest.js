// // Tests/DefaultTest.js

// const {Builder, By, until} = require('selenium-webdriver');

// (async function example() {
//     const driver = await new Builder().forBrowser('chrome').build();

//     try {
//         await driver.get('https://www.google.com');
//         await driver.findElement(By.name('q')).sendKeys('nehalist');
//         await driver.findElement(By.id('tsf')).submit();
//         await driver.wait(until.elementLocated(By.id('search')));
//         //await driver.findElement(By.linkText('nehalist.io')).click();
//         await driver.wait(until.titleIs('nehalist - Google Search'));
//     } finally {
//         await driver.quit();
//     }
// })();

const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('DefaultTest', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should go to nehalist.io and check the title', async () => {
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('nehalist', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        const title = await driver.getTitle();

        expect(title).to.equal('nehalist - Google Search');
    });

    after(async () => driver.quit());
});



// const {Builder, By, until} = require('selenium-webdriver');
// console.log('i am here');

// (async function example() {
//     const driver = await new Builder().forBrowser('chrome').build();

//     try {
//         await driver.get('https://www.google.com');
//         await driver.findElement(By.name('q')).sendKeys('nehalist');
//         await driver.findElement(By.id('tsf')).submit();
//         await driver.wait(until.elementLocated(By.id('search')));
//         //await driver.findElement(By.linkText('nehalist.io')).click();
//         console.log('here 2');

//         await printPageDetails(driver);

//         await driver.wait(until.titleIs('nehalist.io - Google Search'));
//     } finally {
//         await driver.quit();
//     }
// })();

// async function printPageDetails(driver) {
//     await driver.wait(until.titleIs('nehalist - Google Search'));
//     console.log(searchTitle);
//     console.log('here 3');
// }