const {test, expect} = require('@playwright/test');

const baseURL = 'http://localhost:3000'

test('Verify All Books link is visible', async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$(".navbar-dashboard > a");
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
});

test('Verify Login button is visible', async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector('nav.navbar');
    const loginButton = await page.$("a.button:nth-child(1)");
    const isLoginButtonVisible = await loginButton.isVisible();
    expect(isLoginButtonVisible).toBe(true);
});

test('Verify Register button is visible', async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector('nav.navbar');
    const registerButton = await page.$("#guest > a:nth-child(2)");
    const isRegisterButtonVisible = await registerButton.isVisible();
    expect(isRegisterButtonVisible).toBe(true);
});

test('Verify All Books link is visible after user is logged in', async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector('nav.navbar');
    await page.click("a.button:nth-child(1)");
    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');
    await page.click('input.button');

    const allBooksLink = await page.$(".navbar-dashboard > a");
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
});

test('Verify logout button is visible after user is logged in', async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector('nav.navbar');
    await page.click("a.button:nth-child(1)");
    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');
    await page.click('input.button');

    const logoutButton = await page.$("#logoutBtn");
    const isLogoutButtonVisible = await logoutButton.isVisible();
    expect(isLogoutButtonVisible).toBe(true);
});