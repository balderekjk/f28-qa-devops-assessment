import { Builder, Capabilities, By } from 'selenium-webdriver';

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get('http://localhost:3000/');
});

afterAll(async () => {
  driver.quit();
});

describe('duelDuo functionality tests pass', () => {
  test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'));
    const displayed = await title.isDisplayed();
    expect(displayed).toBe(true);
  });

  test('Clicked draw button displays id="choices"', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(2000);
    const choices = await driver.findElement(By.id('choices'));
    const displayed = await choices.isDisplayed();
    expect(displayed).toBe(true);
  });

  test('Clicked Add-to-Duo button displays id="player-duo"', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(2000);
    await driver
      .findElement(By.xpath('//button[contains(text(), "Add to Duo")]'))
      .click();
    await driver.sleep(2000);
    const playerDuo = await driver.findElement(By.id('player-duo'));
    const displayed = await playerDuo.isDisplayed();
    expect(displayed).toBe(true);
  });
});
